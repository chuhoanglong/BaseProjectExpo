/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MatchEntity } from './MatchEntity';
import type { MediaEntity } from './MediaEntity';
export type PersonalEntity = {
  /**
   * Personal value
   */
  value: number;
  /**
   * Change in personal value
   */
  change: number;
  /**
   * Match details
   */
  match: MatchEntity;
  /**
   * Media distribution
   */
  media: MediaEntity;
};

