import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Words {
  @Field(type => [String], { nullable: true })
  words: string[];
}
