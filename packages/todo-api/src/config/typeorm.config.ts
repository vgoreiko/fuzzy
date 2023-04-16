import { configuration } from "./configuration";
import { DataSource } from 'typeorm';
import { UserEntity } from '../app/user';
import { TodoEntity } from '../app/todo';

const config = configuration();
const typeormConfig = config.db;
console.log(typeormConfig);
const { type, host, port, username, password, database } = typeormConfig;

export const connectionSource = new DataSource({
  type,
  host,
  port,
  username,
  password,
  database,
  entities: [UserEntity, TodoEntity],
});
