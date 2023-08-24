import { EntityRepository, Repository } from 'typeorm';
import { DirectorEntity } from '../entities/director.entity';

@EntityRepository(DirectorEntity)
export class MoviesRepository extends Repository<DirectorEntity> {}
