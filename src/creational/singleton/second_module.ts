import { MyDatabaseClassic } from './db/my-database-classic';
const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.remove(1);
