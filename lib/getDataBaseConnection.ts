import {Connection, createConnection, getConnectionManager} from 'typeorm';
import 'reflect-metadata';
import databaseConfig from '../ormconfig';
import {Post} from '../src/entity/Post';
import {Comment} from '../src/entity/Comment';
import {User} from '../src/entity/User';

const manager = getConnectionManager();
const getDataBaseConnection: () => Promise<Connection> = async () => {
  if (manager.has('default')) {
    const defaultConnection = manager.get('default');
    console.log('关闭 connection');
    await defaultConnection.close();
  }
  return createConnection({
    ...databaseConfig,
    type: 'postgres',
    name: 'default',
    entities: [
      Post,
      Comment,
      User
    ]
  });
};

export default getDataBaseConnection;
