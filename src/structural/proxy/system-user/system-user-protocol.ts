import { SystemUserAddressProtocol } from './system-user-address-protocol';

export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  getAddress(): Promise<SystemUserAddressProtocol[]>;
}
