import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorEntity } from './entities/director.entity';
import { MovieEntity } from './entities/movie.entity';
import { ActorEntity } from './entities/actor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity, ActorEntity, DirectorEntity]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
