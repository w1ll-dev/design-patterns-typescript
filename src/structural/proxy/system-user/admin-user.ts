import { SystemUserAddressProtocol } from './system-user-address-protocol';
import { SystemUserProtocol } from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  async getAddress(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve([
            {
              street: 'Rua 01',
              number: 25,
            },
            {
              street: 'Rua 01',
              number: 25,
            },
          ]),
        2000,
      );
    });
  }
}
