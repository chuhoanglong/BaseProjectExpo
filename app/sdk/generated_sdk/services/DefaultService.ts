/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectAppData } from '../models/ConnectAppData';
import type { CreateDataVolumeDto } from '../models/CreateDataVolumeDto';
import type { DataVolumesEntity } from '../models/DataVolumesEntity';
import type { DisconnectAppData } from '../models/DisconnectAppData';
import type { GetDataVolumeResponse } from '../models/GetDataVolumeResponse';
import type { GetStatisticDataResponse } from '../models/GetStatisticDataResponse';
import type { UpdateDataStatusDto } from '../models/UpdateDataStatusDto';
import type { UpsertMatchRateDto } from '../models/UpsertMatchRateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns string
   * @throws ApiError
   */
  public appControllerGetDefaultVersionHealth(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0',
    });
  }
  /**
   * @returns string
   * @throws ApiError
   */
  public appControllerGetHealth(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public appControllerGetError(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/debug-sentry',
    });
  }
  /**
   * @returns DataVolumesEntity
   * @throws ApiError
   */
  public dataVolumesControllerCreate({
    requestBody,
  }: {
    requestBody: CreateDataVolumeDto,
  }): CancelablePromise<DataVolumesEntity> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/data/data-volumes',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns GetDataVolumeResponse
   * @throws ApiError
   */
  public dataVolumesControllerGetAllDataVolumes(): CancelablePromise<GetDataVolumeResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/data/data-volumes',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public dataVolumesControllerUpsertMatchRate({
    requestBody,
  }: {
    requestBody: UpsertMatchRateDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/data/data-volumes/upsert-match-rate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns UpdateDataStatusDto
   * @throws ApiError
   */
  public dataVolumesControllerUpdateStatus({
    requestBody,
  }: {
    requestBody: UpdateDataStatusDto,
  }): CancelablePromise<UpdateDataStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/data/data-volumes/update-status',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public dataVolumesControllerConnectAppData({
    requestBody,
  }: {
    requestBody: ConnectAppData,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/data/data-volumes/connect',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public dataVolumesControllerDisconnectAppData({
    requestBody,
  }: {
    requestBody: DisconnectAppData,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/data/data-volumes/disconnect',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public dataVolumesControllerDeleteAppData({
    app,
  }: {
    app: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v0/data/data-volumes/{app}',
      path: {
        'app': app,
      },
    });
  }
  /**
   * @returns GetStatisticDataResponse
   * @throws ApiError
   */
  public dataVolumesControllerGetStatisticData({
    timePeriod,
    productCode,
  }: {
    timePeriod: string,
    productCode: string,
  }): CancelablePromise<GetStatisticDataResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/data/data-volumes/statistic-data',
      query: {
        'timePeriod': timePeriod,
        'productCode': productCode,
      },
    });
  }
}
