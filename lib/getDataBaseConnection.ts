import {getConnectionManager, createConnection, Connection} from 'typeorm';
const manager = getConnectionManager();
const getDataBaseConnection: () => Promise<Connection> = async () => {
  console.log('manager.connections', manager.connections);

  if (!manager.has('default')) {
    return createConnection('default');
  }
  const defaultConnection = manager.get('default');
  return defaultConnection.isConnected ? defaultConnection : createConnection('default');
};

export default getDataBaseConnection;
