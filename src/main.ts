import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Ldh API')
    .setDescription('LDH Todo API description')
    .setVersion('1.0')
    //.addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
