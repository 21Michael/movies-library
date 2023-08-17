import { MovieEntity } from '../entities/movie.entity';

export interface DirectorModel {
  id: string;
  fullName: string;
  movies: MovieEntity[];
}
