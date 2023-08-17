import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovieEntity } from './movie.entity';

export class DirectorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @OneToMany(() => MovieEntity, (movie) => movie.director)
  movies: MovieEntity[];
}
