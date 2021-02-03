import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDatabaseClassic = {
  addUser(newUser: User): void {
    users.push(newUser);
  },

  remove(userIndex: number): void {
    users.splice(userIndex, 1);
  },

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
