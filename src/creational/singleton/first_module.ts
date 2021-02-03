import { MyDatabaseClassic } from './db/my-database-classic';
const myDatabaseClassic = MyDatabaseClassic;
myDatabaseClassic.addUser({ name: 'Will', age: 23 });
myDatabaseClassic.addUser({ name: 'André', age: 23 });
myDatabaseClassic.addUser({ name: 'Vicson', age: 25 });
myDatabaseClassic.addUser({ name: 'Felipe', age: 24 });

import './second_module';
myDatabaseClassic.show();
