import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private constructor() {}

  private users: User[] = [];

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  remove(userIndex: number): void {
    this.users.splice(userIndex, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
