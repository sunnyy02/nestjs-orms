import { Migration } from '@mikro-orm/migrations';

export class Migration20220501031302 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "cat" ("id" serial primary key, "name" varchar(255) not null, "breed" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('create table "Posts" ("id" serial primary key, "title" varchar not null default null, "body" text not null default null, "userId" int4 not null default null, "createdAt" timestamptz not null default null, "updatedAt" timestamptz not null default null);');

    this.addSql('create table "Users" ("id" serial primary key, "name" varchar not null default null, "email" varchar not null default null, "password" varchar not null default null, "gender" enum_Users_gender not null default null, "createdAt" timestamptz not null default null, "updatedAt" timestamptz not null default null);');
    this.addSql('alter table "Users" add constraint "Users_email_key" unique ("email");');

    this.addSql('create table "typeorm_metadata" ("type" varchar not null default null, "database" varchar null default null, "schema" varchar null default null, "table" varchar null default null, "name" varchar null default null, "value" text null default null);');

    this.addSql('alter table "Posts" add constraint "Posts_userId_fkey" foreign key ("userId") references "Users" ("id") on update cascade on delete no action;');
  }

}
