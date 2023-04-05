import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubscribesTypes1680118395273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('subscribe')
      .values({ type: 'guest' })
      .execute();
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('subscribe')
      .values({ type: 'advance' })
      .execute();
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('subscribe')
      .values({ type: 'premium' })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "subscribe" WHERE "type" = "guest"`);
    await queryRunner.query(`DELETE FROM "subscribe" WHERE "type" = "advance"`);
    await queryRunner.query(`DELETE FROM "subscribe" WHERE "type" = "premium"`);
  }
}
