import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './words/words.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
