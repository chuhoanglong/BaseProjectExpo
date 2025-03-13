/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateDataStatusDto = {
  email: string;
  video: number;
  audio: number;
  text: number;
  image: number;
  productCode: UpdateDataStatusDto.productCode;
  status: UpdateDataStatusDto.status;
  dataType?: UpdateDataStatusDto.dataType;
  datasetId?: string;
  dataVolume?: number;
  dataOriginCategory?: UpdateDataStatusDto.dataOriginCategory;
  dataOriginServiceId?: string;
  metaData?: string;
  isTrainEnable?: boolean;
  isPersonalizeEnable?: boolean;
  isSaleEnable?: boolean;
};
export namespace UpdateDataStatusDto {
  export enum productCode {
    GIJIROKU = 'gijiroku',
    ALT_BRAIN = 'alt-brain',
    CLONE_DEV = 'clone-dev',
    PDS_DEV = 'pds-dev',
  }
  export enum status {
    REGISTERED = 'registered',
    UPLOADED = 'uploaded',
    DELETED = 'deleted',
    FAILED = 'failed',
  }
  export enum dataType {
    AUDIO = 'audio',
    TEXT = 'text',
    VIDEO = 'video',
    IMAGE = 'image',
  }
  export enum dataOriginCategory {
    ALT = 'alt',
    EXTERNAL = 'external',
  }
}

