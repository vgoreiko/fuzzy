import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { TodoPriorityEnum } from "../app/todo";

export class initUserAndTodoTables1678397082356 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "bigint",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "username",
          type: "varchar",
          length: "30",
          isNullable: false
        },
        {
          name: "email",
          type: "varchar",
          length: "255",
          isUnique: true,
          isNullable: false
        }
      ]
    }));
    await queryRunner.createTable(new Table({
      name: "todos",
      columns: [
        {
          name: "id",
          type: "bigint",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "name",
          type: "varchar",
          length: "100",
          isNullable: false
        },
        {
          name: "description",
          type: "varchar",
          length: "200",
          isNullable: true
        },
        {
          name: "priority",
          type: "varchar",
          length: "50",
          isNullable: false,
          default: TodoPriorityEnum.Low
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users", true);
    await queryRunner.dropTable("todos", true);
  }

}
