import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MoviesModule } from './modules/movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  POSTGRES_DB,
  POSTGRES_DB_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from '../config';

@Module({
  imports: [
    MoviesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_DB_HOST,
      port: 5432,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
