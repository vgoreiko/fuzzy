import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { dbConfiguration, configuration } from "../config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: dbConfiguration,
        inject: [ConfigService]
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
