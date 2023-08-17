import { MovieModel } from './movie.model';

export interface ActorModel {
  id: string;
  fullName: string;
  gender: string;
  age: number;
  movies: MovieModel[];
}
