import { Injectable } from '@nestjs/common';
import { GetWordsArgs } from './dto/args/get-words.args';
import { Words } from './models/words';

@Injectable()
export class WordsService {

     private keyMap = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    };

  public getWords(getWordsArgs: GetWordsArgs): Words {
    let digits: string | string[] = getWordsArgs.digits.toString();

    if (!digits.length) return { words: [] };
    digits = digits.split('');
   
    let result = this.keyMap[digits[0]];
    for (let i = 1; i < digits.length; i++) {
      result = result
                    .map(item1 => this.keyMap[digits[i]]
                    .map(item2 => item1 + item2))
                    .flat();
    }

    return { words: result };
  }

}
