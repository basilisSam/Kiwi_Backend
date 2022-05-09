import { Module } from '@nestjs/common';
import { WordsResolver } from './words.resolver';
import { WordsService } from './words.service';

@Module({
  providers: [WordsResolver, WordsService],
})
export class UsersModule {}
