import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserRolesInTable1680118402426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('user_role')
      .values({ type: 'admin' })
      .execute();
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('user_role')
      .values({ type: 'user' })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user_role" WHERE "type" = "admin"`);
    await queryRunner.query(`DELETE FROM "user_role" WHERE "type" = "user"`);
  }
}
