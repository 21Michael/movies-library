import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovieEntity } from './movie.entity';

export class ActorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @ManyToMany(() => MovieEntity)
  @JoinTable()
  movies: MovieEntity[];
}
