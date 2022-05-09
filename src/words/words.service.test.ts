import { GetWordsArgs } from './dto/args/get-words.args';
import { WordsService } from './words.service';

it('should return all letters for a digit', () => {
  const service = new WordsService();
  const args: GetWordsArgs = { digits: 2 };
  const result = service.getWords(args);

  expect(result).toStrictEqual({ words: ['a', 'b', 'c'] });
});

it('should return all letters for digit combination', () => {
  const service = new WordsService();
  const args: GetWordsArgs = { digits: 23 };
  const result = service.getWords(args);

  expect(result).toStrictEqual({
    words: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  });
});

it('should return undefined object when invalid character', () => {
  const service = new WordsService();
  const args: GetWordsArgs = { digits: 1 };
  const result = service.getWords(args);

  expect(result.words).toBe(undefined);
});