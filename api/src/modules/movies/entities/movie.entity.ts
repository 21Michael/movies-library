import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DirectorEntity } from './director.entity';
import { ActorEntity } from './actor.entity';

@Entity()
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => ActorEntity)
  @JoinTable({
    name: 'movie_actor',
    joinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'actor_id',
      referencedColumnName: 'id',
    },
  })
  actors: ActorEntity[];

  @Column({ unique: true })
  director_id: string;

  @OneToOne(() => DirectorEntity)
  @JoinColumn({ name: 'director_id' })
  director: DirectorEntity;

  @Column()
  description: string;
}
