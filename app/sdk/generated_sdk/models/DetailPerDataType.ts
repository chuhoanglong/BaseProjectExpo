/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DetailPerDataType = {
  dataType: DetailPerDataType.dataType;
  amount: number;
  lastUpdate?: string;
  changeToLastPeriod: number;
  percent: number;
};
export namespace DetailPerDataType {
  export enum dataType {
    AUDIO = 'audio',
    TEXT = 'text',
    VIDEO = 'video',
    IMAGE = 'image',
  }
}

