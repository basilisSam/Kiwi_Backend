import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetWordsArgs } from './dto/args/get-words.args';
import { Words } from './models/words';
import { WordsService } from './words.service';

@Resolver(() => Words)
export class WordsResolver {
  constructor(private readonly wordsService: WordsService) {}

  @Query(() => Words, { name: 'words'})
  getWords(@Args() getWordsArgs: GetWordsArgs): Words {
    return this.wordsService.getWords(getWordsArgs);
  }
  
}
