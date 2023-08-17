import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MoviesModule } from './modules/movies/movies.module';
import { UsersController } from './modules/users/controllers/users.controller';
import { MoviesController } from './modules/movies/controllers/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';

@Module({
  imports: [
    UsersModule,
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_DB_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [UsersController, MoviesController],
})
export class AppModule {}
