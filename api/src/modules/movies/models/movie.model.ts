import { ActorModel } from './actor.model';
import { DirectorModel } from './director.model';

export interface MovieModel {
  id: string;
  name: string;
  actors: ActorModel[];
  directorId: string;
  director: DirectorModel;
  description: string;
}
