import { configuration } from "./configuration";
import { DataSource } from 'typeorm';
import { UserEntity } from '../app/user';
import { TodoEntity } from '../app/todo';
// import * as path from "path";
import { UsersAndTodos1681752673346 } from '../migrations/1681752673346-UsersAndTodos'

// TODO: uncomment when migrations will be running. For now - manual definition
const config = configuration();
const typeormConfig = config.db;
const { type, host, port, username, password, database } = typeormConfig;
export default new DataSource({
  type,
  host,
  port,
  username,
  password,
  database,
  entities: [UserEntity, TodoEntity],
  migrations: [UsersAndTodos1681752673346],
});
