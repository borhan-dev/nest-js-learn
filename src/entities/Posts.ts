import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export default class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar' })
  author: string;

  @ManyToOne(() => User, (user) => user.posts, {
    createForeignKeyConstraints: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  user: User;
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
