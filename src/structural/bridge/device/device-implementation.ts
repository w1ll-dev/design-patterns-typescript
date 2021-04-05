export interface DeviceImplementation {
  getName(): string;
  setPower(newPowerStatus: boolean): void;
  getPower(): boolean;
  setVolum(volum: number): void;
  getVolum(): number;
}
