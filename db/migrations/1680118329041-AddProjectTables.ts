import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProjectTables1680118329041 implements MigrationInterface {
  name = 'AddProjectTables1680118329041';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."subscribe_type_enum" AS ENUM('guest', 'simple', 'advance', 'premium')`,
    );
    await queryRunner.query(
      `CREATE TABLE "subscribe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."subscribe_type_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_35ec79914b134a23697a657c1bb" UNIQUE ("type"), CONSTRAINT "PK_3e91e772184cd3feb30688ef1b8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "birthday" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "subscribe_id" uuid, "role_id" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "age_limit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "age_limit" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_12b22d2bf0db17a2a1cf92107cb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."genre_name_enum" AS ENUM('action', 'comedy', 'drama', 'cartoon')`,
    );
    await queryRunner.query(
      `CREATE TABLE "genre" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" "public"."genre_name_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "moovie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "year" character varying NOT NULL, "description" character varying NOT NULL, "rate" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "age_limit" uuid, CONSTRAINT "PK_8889e5e09b6e4d436574a99f518" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "actor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "moovie_id_genre_id" ("moovie_id" uuid NOT NULL, "genre_id" uuid NOT NULL, CONSTRAINT "PK_2e69318c6166e84ebd35fcb1bef" PRIMARY KEY ("moovie_id", "genre_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_933b463d3f7e5717ca105e4464" ON "moovie_id_genre_id" ("moovie_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_21b22f162bb5327d014da82619" ON "moovie_id_genre_id" ("genre_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "moovie_id_actor_id" ("moovie_id" uuid NOT NULL, "actor_id" uuid NOT NULL, CONSTRAINT "PK_404d9ea93d3763c8c543b439996" PRIMARY KEY ("moovie_id", "actor_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9c13e10072dfb7d7fd9d9602bc" ON "moovie_id_actor_id" ("moovie_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_95f73be72f0c1ce7a37f695379" ON "moovie_id_actor_id" ("actor_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_df38aabe125b23bb24145896b20" FOREIGN KEY ("subscribe_id") REFERENCES "subscribe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "user_role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie" ADD CONSTRAINT "FK_d1492cab18fb873a2da9c553d00" FOREIGN KEY ("age_limit") REFERENCES "age_limit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_genre_id" ADD CONSTRAINT "FK_933b463d3f7e5717ca105e4464c" FOREIGN KEY ("moovie_id") REFERENCES "moovie"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_genre_id" ADD CONSTRAINT "FK_21b22f162bb5327d014da826194" FOREIGN KEY ("genre_id") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_actor_id" ADD CONSTRAINT "FK_9c13e10072dfb7d7fd9d9602bc7" FOREIGN KEY ("moovie_id") REFERENCES "moovie"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_actor_id" ADD CONSTRAINT "FK_95f73be72f0c1ce7a37f695379f" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "moovie_id_actor_id" DROP CONSTRAINT "FK_95f73be72f0c1ce7a37f695379f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_actor_id" DROP CONSTRAINT "FK_9c13e10072dfb7d7fd9d9602bc7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_genre_id" DROP CONSTRAINT "FK_21b22f162bb5327d014da826194"`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie_id_genre_id" DROP CONSTRAINT "FK_933b463d3f7e5717ca105e4464c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "moovie" DROP CONSTRAINT "FK_d1492cab18fb873a2da9c553d00"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_df38aabe125b23bb24145896b20"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_95f73be72f0c1ce7a37f695379"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9c13e10072dfb7d7fd9d9602bc"`,
    );
    await queryRunner.query(`DROP TABLE "moovie_id_actor_id"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_21b22f162bb5327d014da82619"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_933b463d3f7e5717ca105e4464"`,
    );
    await queryRunner.query(`DROP TABLE "moovie_id_genre_id"`);
    await queryRunner.query(`DROP TABLE "actor"`);
    await queryRunner.query(`DROP TABLE "moovie"`);
    await queryRunner.query(`DROP TABLE "genre"`);
    await queryRunner.query(`DROP TYPE "public"."genre_name_enum"`);
    await queryRunner.query(`DROP TABLE "age_limit"`);
    await queryRunner.query(`DROP TABLE "user_role"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "subscribe"`);
    await queryRunner.query(`DROP TYPE "public"."subscribe_type_enum"`);
  }
}
