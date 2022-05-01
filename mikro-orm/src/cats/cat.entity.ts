import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Cat {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
}
