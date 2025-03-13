import {AppClient, OpenAPI} from './generated_sdk';
import type {ApiRequestOptions} from './generated_sdk/core/ApiRequestOptions';

interface ClientConfig {
  token?: string | ((opt: ApiRequestOptions) => Promise<string>);
  headers?: Record<string, string>;
  baseUrl?: string;
}

export class SdkAppClient {
  private static instance: AppClient;
  private static config: ClientConfig = {};

  /**
   * Validates the configuration and environment variables
   * @throws Error if required configuration is missing
   */
  private static validateConfig(): void {
    const baseUrl = this.config.baseUrl;
    if (!baseUrl) {
      throw new Error('API_ENDPOINT environment variable is not configured');
    }
  }

  /**
   * Updates the client configuration
   */
  private static updateConfig(newConfig: ClientConfig): void {
    if (!SdkAppClient.instance) {
      return;
    }

    const {token, headers} = newConfig;

    // Update token if it's undefined or a string
    if (!token || typeof token === 'string') {
      SdkAppClient.instance.request.config.TOKEN = token;
    }

    // Merge new headers with existing ones
    if (headers) {
      SdkAppClient.instance.request.config.HEADERS = {
        ...SdkAppClient.instance.request.config.HEADERS,
        ...headers,
      };
    }
  }

  /**
   * Gets or creates an AppClient instance
   * @throws Error if configuration validation fails
   */
  public static getAppClientInstance(config?: ClientConfig): AppClient {
    try {
      // Store new config
      if (config) {
        SdkAppClient.config = {
          ...SdkAppClient.config,
          ...config,
        };
      }

      // Validate configuration
      SdkAppClient.validateConfig();

      // Create instance if it doesn't exist
      if (!SdkAppClient.instance) {
        SdkAppClient.instance = new AppClient({
          ...OpenAPI,
          BASE: this.config.baseUrl,
          TOKEN: SdkAppClient.config.token,
          HEADERS: SdkAppClient.config.headers,
          ENCODE_PATH: encodeURIComponent,
        });
      } else {
        // Update existing instance with new config
        SdkAppClient.updateConfig(SdkAppClient.config);
      }

      return SdkAppClient.instance;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to initialize API client: ${error.message}`);
      }
      throw error;
    }
  }
}
