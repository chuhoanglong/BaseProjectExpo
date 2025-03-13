/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GenUploadDto = {
  filename: string;
  type: GenUploadDto.type;
};
export namespace GenUploadDto {
  export enum type {
    AUDIO = 'audio',
    VIDEO = 'video',
    IMAGE = 'image',
    AVATAR = 'avatar',
  }
}

