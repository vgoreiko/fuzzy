import { configuration } from "./configuration";
import { DataSource } from 'typeorm';
import { UserEntity } from '../app/user';
import { TodoEntity } from '../app/todo';
import * as path from "path";

// TODO: uncomment when migrations will be running. For now - manual definition
// const config = configuration();
// const typeormConfig = config.db;
// const { type, host, port, username, password, database, migrations } = typeormConfig;
// console.log('typeormConfig:', typeormConfig);
// export default new DataSource({
//   type,
//   host,
//   port,
//   username,
//   password,
//   database,
//   entities: [UserEntity, TodoEntity],
//   migrations,
// });
const p = path.join(__dirname, '..', 'migrations/*.ts')
console.log('p:', p)
export default new DataSource({
  type: 'postgres',
  host: 'host.docker.internal',
  port: 5431,
  username: 'postgres',
  password: 'docker',
  database: 'todoApp',
  entities: [UserEntity, TodoEntity],
  migrations: [p],
});
