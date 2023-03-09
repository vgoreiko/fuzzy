import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsStrongPassword, Length } from "class-validator";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  @Length(3, 30)
  username: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
  })
  @IsEmail()
  email: string;

  // @Column({
  //   nullable: false,
  // })
  // @IsStrongPassword()
  // password: string;
}
