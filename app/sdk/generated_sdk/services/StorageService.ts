/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GentUploadEntity } from '../models/GentUploadEntity';
import type { GenUploadDto } from '../models/GenUploadDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StorageService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns GentUploadEntity
   * @throws ApiError
   */
  public storageControllerGenUploadPresignedUrl({
    requestBody,
  }: {
    requestBody: GenUploadDto,
  }): CancelablePromise<GentUploadEntity> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/presigned-url',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
