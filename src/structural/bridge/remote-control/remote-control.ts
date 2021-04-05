import { DeviceImplementation } from '../device/device-implementation';

export class RemoteControlWithVolum {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(`${this.device.getName()} power: ${this.device.getPower()}`);
  }

  showVolumn(): void {
    const newVolumn = this.device.getVolum();
    const name = this.device.getName();
    console.log(`device: ${name} | volumn: ${newVolumn}`);
  }

  volumUp(): void {
    const oldVolumn = this.device.getVolum();
    this.device.setVolum(oldVolumn + 10);
    this.showVolumn();
  }

  volumDown(): void {
    const oldVolumn = this.device.getVolum();
    this.device.setVolum(oldVolumn - 10);
    this.showVolumn();
  }
}
