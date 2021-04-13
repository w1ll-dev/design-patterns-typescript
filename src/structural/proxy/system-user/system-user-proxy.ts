import { AdminUser } from './admin-user';
import { SystemUserAddressProtocol } from './system-user-address-protocol';
import { SystemUserProtocol } from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser?: SystemUserProtocol | null = null;
  private realUserAddresses?: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (!this.realUser)
      this.realUser = new AdminUser(this.firstName, this.userName);

    return this.realUser;
  }

  async getAddress(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    if (!this.realUserAddresses)
      this.realUserAddresses = await this.realUser.getAddress();

    return this.realUserAddresses;
  }
}
