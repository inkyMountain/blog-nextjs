import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createPost1591527594714 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        {
          name: 'id',
          isGenerated: true,
          type: 'int',
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'title',
          type: 'text'
        },
        {
          name: 'content',
          type: 'text'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }

}
