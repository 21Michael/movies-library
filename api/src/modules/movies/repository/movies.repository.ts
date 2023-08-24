import { EntityRepository, Repository } from 'typeorm';
import { MovieEntity } from '../entities/movie.entity';

@EntityRepository(MovieEntity)
export class MoviesRepository extends Repository<MovieEntity> {}
