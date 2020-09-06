const {SnakeNamingStrategy} = require('typeorm-naming-strategies');

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'blog',
  password: '',
  database: 'blog_development',
  synchronize: false,
  logging: false,
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
