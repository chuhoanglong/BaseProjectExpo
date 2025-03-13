import appConfig from "@config"
import { SdkAppClient } from "./api.instance"
import { AppClient } from "./generated_sdk"

export function ApiClient(headers: Record<string, string> = {}): AppClient {
  return SdkAppClient.getAppClientInstance({
    token: async () => {
      const token = ""
      return token
    },
    headers,
    baseUrl: appConfig.API_URL,
  })
}
