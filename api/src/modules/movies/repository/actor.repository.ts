import { EntityRepository, Repository } from 'typeorm';
import { ActorEntity } from '../entities/actor.entity';

@EntityRepository(ActorEntity)
export class ActorRepository extends Repository<ActorEntity> {}
