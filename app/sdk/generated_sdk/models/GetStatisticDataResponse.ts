/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataPerProduct } from './DataPerProduct';
import type { DayVolumesEntity } from './DayVolumesEntity';
import type { DetailPerDataType } from './DetailPerDataType';
export type GetStatisticDataResponse = {
  dataTypeDetailAll?: Array<DetailPerDataType>;
  changeData?: Array<DayVolumesEntity>;
  data?: Array<DayVolumesEntity>;
  totalDataAmount?: number;
  totalChangeAmount?: number;
  dataPerProducts?: Array<DataPerProduct>;
};

