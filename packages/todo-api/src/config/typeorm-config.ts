import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  url: 'host.docker.internal',
  port: 5431,
  database: 'todoApp',
  synchronize: true,
  entities: ['dist/packages/todo-api/**/*.entity{ .ts,.js}'],
  username: 'postgres',
  password: 'docker',
  migrations: ['dist/packages/todo-api/migrations/*.ts'],
})
