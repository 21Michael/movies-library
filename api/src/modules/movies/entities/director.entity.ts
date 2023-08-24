import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovieEntity } from './movie.entity';

@Entity()
export class DirectorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @OneToMany(() => MovieEntity, (movie) => movie.director)
  movies: MovieEntity[];
}
