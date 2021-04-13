import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Will', 'w1ll-dev');
  console.log('This will take two seconds');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddress());
  }
}

clientCode();
