import { WordsResolver } from './words.resolver';
import { WordsService } from './words.service';
import { Test, TestingModule } from '@nestjs/testing';
import { GetWordsArgs } from './dto/args/get-words.args';

describe('CustomerResolver', () => {
  let resolver: WordsResolver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WordsResolver,
        {
          provide: WordsService,
          useFactory: () => ({
            getWords: jest.fn((digits: GetWordsArgs) => ({
              words: ['abc'],
            })),
          }),
        },
      ],
    }).compile();
    resolver = module.get<WordsResolver>(WordsResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });


    it('should return words given a digit', async () => {
      const wordsResponse = await resolver.getWords({digits:2})
      expect(wordsResponse).toEqual({words:['abc']})
    })

});


