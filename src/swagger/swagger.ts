import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './swagger.config';

export const createDocument = (app: INestApplication): OpenAPIObject => {
  const builder = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .setVersion(SWAGGER_CONFIG.version)
    .addBasicAuth({
      type: 'http',
      bearerFormat: 'jwt',
      scheme: 'bearer',
      name: 'access-token',
    });

  for (const tag of SWAGGER_CONFIG.tags) {
    builder.addTag(tag);
  }

  const options = builder.build();
  return SwaggerModule.createDocument(app, options);
};
