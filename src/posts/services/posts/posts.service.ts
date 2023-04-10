import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Posts from 'src/entities/Posts';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postsRepository: Repository<Posts>,
  ) {}

  findPosts() {
    return this.postsRepository.find();
  }

  createPost(post: CreatePost) {
    const newPost = new Posts();

    newPost.title = post.title;
    newPost.content = post.content;
    newPost.author = 'Borhan Uddin';

    return this.postsRepository.save(newPost);
  }
}
