import { Injectable } from '@nestjs/common';
import { MovieModel } from '../models/movie.model';
import { CreateMovieDto, UpdateMovieDto } from '../dto/movies.dto';

@Injectable()
export class MoviesService {
  async getAllMovies(): Promise<MovieModel[]> {}

  async getMovieById(id: string): Promise<MovieModel> {}

  public async addMovie(createMovieDto: CreateMovieDto): Promise<void> {}

  async updateMovie({
    id,
    updateMovieDto,
  }: {
    id: string;
    updateMovieDto: UpdateMovieDto;
  }): Promise<MovieModel> {}

  async deleteMovie(id: string): Promise<void> {}
}
