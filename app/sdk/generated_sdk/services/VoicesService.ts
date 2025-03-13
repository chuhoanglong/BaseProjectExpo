/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVoiceDto } from '../models/CreateVoiceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VoicesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public voicesControllerUpsertVoicePath({
    requestBody,
  }: {
    requestBody: CreateVoiceDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/voices',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
