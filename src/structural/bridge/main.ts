import { Tv } from './device/radio';
import { Radio } from './device/tv';
import { RemoteControlWithVolum } from './remote-control/remote-control';
import { RemoteControl } from './remote-control/remote-control-with-volum';

function clientCode(abstraction: RemoteControl | RemoteControlWithVolum): void {
  abstraction.togglePower();

  // Type Guard
  if (!('volumUp' in abstraction)) return;

  abstraction.volumUp();
  abstraction.volumUp();
  abstraction.volumUp();
  abstraction.volumDown();
}

const tv = new Tv();
const radio = new Radio();

const remoteControl = new RemoteControl(tv);
const remoteControlWithVolum = new RemoteControlWithVolum(radio);

clientCode(remoteControlWithVolum);
