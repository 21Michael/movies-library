import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MovieEntity } from './movie.entity';

@Entity()
export class ActorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @ManyToMany(() => MovieEntity)
  @JoinTable({
    name: 'movie_actor',
    joinColumn: {
      name: 'actor_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
  })
  movies: MovieEntity[];
}
