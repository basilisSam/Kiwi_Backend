import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetWordsArgs {
  @Field()
  @IsNotEmpty()
  digits: number;
}
