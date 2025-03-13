/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppEntity } from './AppEntity';
import type { VolumesEntity } from './VolumesEntity';
export type GetDataVolumeResponse = {
  data: VolumesEntity;
  week: {
    total?: AppEntity;
    'pds-dev'?: AppEntity;
    gijiroku?: AppEntity;
    'alt-brain'?: AppEntity;
    'clone-dev'?: AppEntity;
  };
};

