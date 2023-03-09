import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ]
})
export class UserModule {
}
