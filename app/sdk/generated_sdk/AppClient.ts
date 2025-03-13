/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { DefaultService } from './services/DefaultService';
import { StorageService } from './services/StorageService';
import { UsersService } from './services/UsersService';
import { VoicesService } from './services/VoicesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AppClient {
  public readonly default: DefaultService;
  public readonly storage: StorageService;
  public readonly users: UsersService;
  public readonly voices: VoicesService;
  public readonly request: BaseHttpRequest;
  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'http://localhost:3001',
      VERSION: config?.VERSION ?? '0.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.default = new DefaultService(this.request);
    this.storage = new StorageService(this.request);
    this.users = new UsersService(this.request);
    this.voices = new VoicesService(this.request);
  }
}

