import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { Cat } from './cats/cat.entity';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [Cat],
  dbName: 'postgres',
  type: 'postgresql',
  port: 5432,
  host: 'localhost',
  debug: true,
  user: 'postgres',
  password: 'postgres',
  logger: logger.log.bind(logger),
  autoFlush: true,
  migrations: {
    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: './migrations', // path to the folder with migrations
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: true, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
} as Options;

export default config;
