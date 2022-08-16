import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';

ObjectType();
Entity();

export class Blog {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id: string;

  @Field()
  @Property()
  title: string;

  @Field()
  @Property()
  description: string;

  //   @Field(() => [Article])
  //   @OneToMany(() => Article, (article) => article.blog, { eager: true })
  //   articles = new Collection<Article>(this);

  @Field(() => Date)
  @Property()
  createdAt = new Date();

  @Field(() => Date)
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
