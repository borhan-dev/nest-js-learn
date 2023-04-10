import { IsNotEmpty, IsString } from 'class-validator';

export default class PostsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  content: string;
}
