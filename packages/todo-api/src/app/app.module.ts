import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "../config/configuration";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
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
        },
        inject: [ConfigService]
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
