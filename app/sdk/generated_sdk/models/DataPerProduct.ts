/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DetailPerDataType } from './DetailPerDataType';
export type DataPerProduct = {
  productCode: DataPerProduct.productCode;
  dataTypeDetails: Array<DetailPerDataType>;
};
export namespace DataPerProduct {
  export enum productCode {
    GIJIROKU = 'gijiroku',
    ALT_BRAIN = 'alt-brain',
    CLONE_DEV = 'clone-dev',
    PDS_DEV = 'pds-dev',
  }
}

