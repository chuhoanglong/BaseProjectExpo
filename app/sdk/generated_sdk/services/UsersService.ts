/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddInviterRequestDto } from '../models/AddInviterRequestDto';
import type { CreateUserDto } from '../models/CreateUserDto';
import type { GetInvitationLinkEntity } from '../models/GetInvitationLinkEntity';
import type { GetMatchRateEntity } from '../models/GetMatchRateEntity';
import type { GetUserConnectionEntityResponse } from '../models/GetUserConnectionEntityResponse';
import type { ProfileEntity } from '../models/ProfileEntity';
import type { SendInvitationEntity } from '../models/SendInvitationEntity';
import type { SendInvitationRequestDto } from '../models/SendInvitationRequestDto';
import type { UpdateAvatarDto } from '../models/UpdateAvatarDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserMetadataEntity } from '../models/UserMetadataEntity';
import type { UserUpdateEntity } from '../models/UserUpdateEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public usersControllerCreate({
    requestBody,
  }: {
    requestBody: CreateUserDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/users',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ProfileEntity
   * @throws ApiError
   */
  public usersControllerGet(): CancelablePromise<ProfileEntity> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/users/me',
    });
  }
  /**
   * @returns UserUpdateEntity
   * @throws ApiError
   */
  public usersControllerUpdateMe({
    requestBody,
  }: {
    requestBody: UpdateUserDto,
  }): CancelablePromise<UserUpdateEntity> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/v0/users/me',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public usersControllerDeleteMe(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v0/users/me',
    });
  }
  /**
   * @returns GetMatchRateEntity
   * @throws ApiError
   */
  public usersControllerGetMatchRate(): CancelablePromise<GetMatchRateEntity> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/users/match-rate',
    });
  }
  /**
   * @returns GetInvitationLinkEntity
   * @throws ApiError
   */
  public usersControllerGetInvitationLink(): CancelablePromise<GetInvitationLinkEntity> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/users/invitation/link',
    });
  }
  /**
   * @returns SendInvitationEntity
   * @throws ApiError
   */
  public usersControllerSendInvitation({
    requestBody,
  }: {
    requestBody: SendInvitationRequestDto,
  }): CancelablePromise<SendInvitationEntity> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/users/invitation/send',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns SendInvitationEntity
   * @throws ApiError
   */
  public usersControllerAddInviter({
    requestBody,
  }: {
    requestBody: AddInviterRequestDto,
  }): CancelablePromise<SendInvitationEntity> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/users/invitation/add-inviter',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public usersControllerUpdateAvatar({
    requestBody,
  }: {
    requestBody: UpdateAvatarDto,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/v0/users/avatar',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns UserMetadataEntity
   * @throws ApiError
   */
  public usersControllerGetUserMetadata(): CancelablePromise<UserMetadataEntity> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/users/metadata',
    });
  }
  /**
   * @returns GetUserConnectionEntityResponse
   * @throws ApiError
   */
  public usersControllerGetUserConnections(): CancelablePromise<GetUserConnectionEntityResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/users/user-connections',
    });
  }
  /**
   * @returns ProfileEntity
   * @throws ApiError
   */
  public usersControllerDetail({
    id,
  }: {
    /**
     * user id
     */
    id: string,
  }): CancelablePromise<ProfileEntity> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v0/users/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public usersControllerAcceptTerm(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v0/users/term',
    });
  }
}
