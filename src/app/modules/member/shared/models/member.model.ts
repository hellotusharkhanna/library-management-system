import { IMemberType } from './member-type.model';

export interface IMember {
  id: string;
  name: string;
  userType: string;
  memberType: IMemberType;
  email: string;
  mobileNumber: string;
  address: string;
  status: MemberStatus;
  addDate: Date;
  leaveDate: Date;
}

export enum MemberStatus {
  ACTIVE = 'active',
  NON_ACTIVE = 'non-active'
}
