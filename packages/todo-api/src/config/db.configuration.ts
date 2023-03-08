import { ConfigService } from "@nestjs/config";

export const dbConfiguration = (configService: ConfigService) => {
  const db = configService.get('db');
  const { type, host, port, username, password, database, entities, synchronize } = db;
  return {
    type,
    host,
    port: port,
    username,
    password,
    database,
    entities,
    synchronize,
    retryAttempts: 1,
  };
}
