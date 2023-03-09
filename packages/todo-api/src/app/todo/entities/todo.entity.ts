import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoPriorityEnum } from "../enums";
import { IsEnum, IsInt, Length, Min } from "class-validator";

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  @IsInt()
  @Min(0)
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  @Length(1, 100)
  name: string;

  @Column({
    length: 200,
  })
  @Length(0, 200)
  description: string;

  @Column({
    type: "enum",
    enum: TodoPriorityEnum,
    default: TodoPriorityEnum.Low,
  })
  @IsEnum(TodoPriorityEnum)
  priority?: TodoPriorityEnum;
}
