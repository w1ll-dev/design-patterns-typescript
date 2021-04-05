import { DeviceImplementation } from './device-implementation';

export class Radio implements DeviceImplementation {
  private volum = 10;
  private power = false;
  private name = 'Tv';

  getName(): string {
    return this.name;
  }

  setPower(newPowerStatus: boolean): void {
    this.power = newPowerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolum(volum: number): void {
    if (volum < 0 || volum > 100) return;
    this.volum = volum;
  }

  getVolum(): number {
    return this.volum;
  }
}
