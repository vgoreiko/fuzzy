import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoPriorityEnum } from "../enums";

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 30
  })
  name: string;

  @Column({
    length: 200,
  })
  description: string;

  @Column({
    type: "enum",
    enum: TodoPriorityEnum,
    default: TodoPriorityEnum.Low,
  })
  priority?: TodoPriorityEnum;
}
