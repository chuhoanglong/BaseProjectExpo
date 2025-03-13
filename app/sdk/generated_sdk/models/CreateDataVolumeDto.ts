/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateDataVolumeDto = {
  /**
   * Year of the data volume entry
   */
  year: number;
  /**
   * Month of the data volume entry
   */
  month: number;
  /**
   * Day of the data volume entry
   */
  day: number;
  /**
   * Project associated with the data
   */
  productCode: CreateDataVolumeDto.productCode;
  /**
   * Size of the data
   */
  video: number;
  /**
   * Size of the data
   */
  audio: number;
  /**
   * Size of the data
   */
  image: number;
  /**
   * Size of the data
   */
  text: number;
  /**
   * Creation date
   */
  createdAt: string;
};
export namespace CreateDataVolumeDto {
  /**
   * Project associated with the data
   */
  export enum productCode {
    GIJIROKU = 'gijiroku',
    ALT_BRAIN = 'alt-brain',
    CLONE_DEV = 'clone-dev',
    PDS_DEV = 'pds-dev',
  }
}

