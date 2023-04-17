import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersAndTodos1681752673346 implements MigrationInterface {
    name = 'UsersAndTodos1681752673346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" BIGSERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."todo_entity_priority_enum" AS ENUM('LOW', 'MEDIUM', 'High')`);
        await queryRunner.query(`CREATE TABLE "todo_entity" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying(200) NOT NULL, "priority" "public"."todo_entity_priority_enum" NOT NULL DEFAULT 'LOW', CONSTRAINT "PK_5e18fff6d62959da212066f2882" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo_entity"`);
        await queryRunner.query(`DROP TYPE "public"."todo_entity_priority_enum"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
