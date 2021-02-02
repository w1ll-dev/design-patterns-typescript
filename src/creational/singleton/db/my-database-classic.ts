interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private constructor() {}

  private users: User[] = [];

  static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
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
