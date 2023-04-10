import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Posts from 'src/entities/Posts';
import { User } from 'src/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, User])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
