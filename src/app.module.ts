import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WordsModule } from './words/words.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      introspection: true,
    }),
    WordsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
