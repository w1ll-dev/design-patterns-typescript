import { MyDatabaseClassic } from './db/my-database-classic';
const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.addUser({ name: 'Will', age: 23 });
myDatabaseClassic.addUser({ name: 'André', age: 23 });
myDatabaseClassic.addUser({ name: 'Vicson', age: 26 });

import './second_module';
myDatabaseClassic.show();
