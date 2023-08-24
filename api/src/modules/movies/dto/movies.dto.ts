import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ActorEntity } from '../entities/actor.entity';
import { DirectorEntity } from '../entities/director.entity';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  actors: [{ id: string }];

  @IsNotEmpty()
  @IsString()
  director_id: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  actors: ActorEntity[];

  @IsOptional()
  @IsString()
  director_id: string;

  @IsOptional()
  @IsObject()
  director?: DirectorEntity;

  @IsOptional()
  @IsString()
  description?: string;
}
