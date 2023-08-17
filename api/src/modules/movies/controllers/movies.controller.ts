import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { MovieModel } from '../models/movie.model';
import { CreateMovieDto, UpdateMovieDto } from '../dto/movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async getAllMovies(): Promise<MovieModel[]> {
    const movies = await this.moviesService.getAllMovies();

    return movies;
  }

  @Get('/:id')
  async getMovieById(@Param('id') id: string): Promise<MovieModel> {
    const movie = await this.moviesService.getMovieById(id);

    return movie;
  }

  @Post()
  async addMovie(@Body() createMovieDto: CreateMovieDto): Promise<void> {
    await this.moviesService.addMovie(createMovieDto);
  }

  @Put('/:id')
  async updateMovie(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<MovieModel> {
    await this.moviesService.updateMovie({ id, updateMovieDto });
  }

  @Delete('/:id')
  async deleteMovie(@Param('id') id: string): Promise<void> {
    await this.moviesService.deleteMovie(id);
  }
}
