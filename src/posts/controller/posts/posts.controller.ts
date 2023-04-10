import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserGuard } from 'src/core/guards/userGuard';
import PostsDto from 'src/posts/dto/post.dto';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('api/v1/posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  getPosts() {
    return this.postService.findPosts();
  }

  @UseGuards(UserGuard)
  @Post()
  createPost(@Body(new ValidationPipe()) post: PostsDto) {
    return this.postService.createPost(post);
  }
}
