import {
  Column,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DirectorEntity } from './director.entity';
import { JoinTable } from 'typeorm/browser';
import { ActorEntity } from './actor.entity';

export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => ActorEntity)
  @JoinTable()
  actors: ActorEntity[];

  @Column({ unique: true })
  directorId: string;

  @OneToOne(() => DirectorEntity)
  @JoinColumn({ name: 'directorId' })
  director: DirectorEntity;

  @Column()
  description: string;
}
