interface CreateUser {
  name: string;
  username: string;
  password: string;
  email: string;
}

interface CreatePost {
  title: string;
  content: string;
}

interface SwaggerConfig {
  title: string;
  description: string;
  version: string;
  tags: string[];
}
