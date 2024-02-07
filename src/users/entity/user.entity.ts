import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  AfterUpdate() {
    console.log('Updated User with id', this.id);
  }

  AfterRemove() {
    console.log('Removed User with id', this.id);
  }
}
