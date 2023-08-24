import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from '../dto/movies.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from '../entities/movie.entity';
import { Repository } from 'typeorm';
import { ActorEntity } from '../entities/actor.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private moviesRepository: Repository<MovieEntity>,
    @InjectRepository(ActorEntity)
    private actorsRepository: Repository<ActorEntity>,
  ) {}

  async getAllMovies(): Promise<MovieEntity[]> {
    const movies = await this.moviesRepository.find({
      relations: ['director', 'actors'],
    });

    if (!movies) {
      throw new NotFoundException('Get all movies error');
    }

    return movies;
  }

  async getMovieById(id: string): Promise<MovieEntity> {
    const movie = await this.moviesRepository.findOne({
      where: { id },
    });

    if (!movie) {
      throw new NotFoundException(`Movie with id: ${id} not found`);
    }

    return movie;
  }

  public async addMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const { name, director_id, description, actors } = createMovieDto;

    const movie = this.moviesRepository.create({
      name,
      director_id,
      description,
    });

    if (actors.length) {
      const actorsExist = await this.actorsRepository.find({
        where: actors,
      });

      movie.actors = actorsExist;
    }

    this.moviesRepository.save(movie);

    return movie;
  }

  async updateMovie({
    id,
    updateMovieDto,
  }: {
    id: string;
    updateMovieDto: UpdateMovieDto;
  }): Promise<void> {
    const { name, director_id, director, actors, description } = updateMovieDto;

    await this.moviesRepository.update(id, {
      name,
      director_id,
      director,
      actors,
      description,
    });
  }

  async deleteMovie(id: string): Promise<void> {
    await this.moviesRepository.delete({
      id,
    });
  }
}
