import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1673468340058 implements MigrationInterface {
  name = 'CreateTables1673468340058';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app_pbgp"."pbgp_form_metadata" ("db_create_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "db_last_update_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "form_metadata_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "description" character varying(2000) NOT NULL DEFAULT '', "active" boolean NOT NULL DEFAULT true, "chefs_form_id" character varying(100) NOT NULL, "version_id" character varying(100) NOT NULL, "version_schema" jsonb NOT NULL, CONSTRAINT "PK_f34d5c3000f4465df58b64d2608" PRIMARY KEY ("form_metadata_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "app_pbgp"."pbgp_user" ("db_create_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "db_last_update_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_name" character varying(100) NOT NULL, "display_name" character varying(200) NOT NULL, "external_id" character varying(100) NOT NULL, "is_authorized" boolean NOT NULL DEFAULT false, "is_admin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_87908396860506ed6b2d203bf5f" UNIQUE ("user_name"), CONSTRAINT "UQ_a7ae2d06650d83d7f27532520a6" UNIQUE ("display_name"), CONSTRAINT "UQ_0324c9f00ebd3c636b34a566581" UNIQUE ("external_id"), CONSTRAINT "PK_4106f29a6ab9a0a798618eefef7" PRIMARY KEY ("user_id"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0324c9f00ebd3c636b34a56658" ON "app_pbgp"."pbgp_user" ("external_id") `
    );
    await queryRunner.query(
      `CREATE TABLE "app_pbgp"."pbgp_comment" ("db_create_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "db_last_update_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(2000) NOT NULL, "application_id" uuid, "user_id" uuid, CONSTRAINT "PK_7d497def055f46abad3511d396a" PRIMARY KEY ("comment_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "app_pbgp"."pbgp_application" ("db_create_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "db_last_update_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "application_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "submission" jsonb, "submission_id" character varying(300) NOT NULL, "confirmation_id" character varying(200) NOT NULL, "facility_name" character varying(200) NOT NULL, "project_title" character varying(100), "total_estimated_cost" money, "asks" money, "status" character varying(100) NOT NULL DEFAULT 'INITIAL_REVIEW', "form_id" uuid, "assigned_to_id" uuid, "last_updated_by_id" uuid, CONSTRAINT "UQ_e887af3337c3c6c1b19f99425ca" UNIQUE ("submission_id"), CONSTRAINT "PK_64b4d607de9e1d2becab547905c" PRIMARY KEY ("application_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "app_pbgp"."pbgp_attachment" ("db_create_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "db_last_update_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "attachment_id" character varying(100) NOT NULL, "url" character varying(200) NOT NULL, "data" bytea, "original_name" character varying(200) NOT NULL, CONSTRAINT "UQ_2523067e2f78eb27437501daac6" UNIQUE ("url"), CONSTRAINT "PK_755231ef579d75df8c8c5b0db7d" PRIMARY KEY ("attachment_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "app_pbgp"."pbgp_border_review_score" ("db_create_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "db_last_update_timestamp" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "data" jsonb, "final_score" integer, "overall_comments" character varying(2000), "border_review_score_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "completion_status" character varying(30) NOT NULL DEFAULT 'IN_PROGRESS', "user_id" uuid, "application_id" uuid, CONSTRAINT "PK_0e0bb42e46644a879f20e78a516" PRIMARY KEY ("border_review_score_id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_comment" ADD CONSTRAINT "FK_aaece98bf11e4e6e23b40b32dd7" FOREIGN KEY ("application_id") REFERENCES "app_pbgp"."pbgp_application"("application_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_comment" ADD CONSTRAINT "FK_cf5dd0252811f945a0e60b34096" FOREIGN KEY ("user_id") REFERENCES "app_pbgp"."pbgp_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_application" ADD CONSTRAINT "FK_bab74b4141c1720bed375a4d2a4" FOREIGN KEY ("form_id") REFERENCES "app_pbgp"."pbgp_form_metadata"("form_metadata_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_application" ADD CONSTRAINT "FK_5542578e778e096d2502a95ec1f" FOREIGN KEY ("assigned_to_id") REFERENCES "app_pbgp"."pbgp_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_application" ADD CONSTRAINT "FK_5783a8c139f9aebc3c08feb0436" FOREIGN KEY ("last_updated_by_id") REFERENCES "app_pbgp"."pbgp_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_border_review_score" ADD CONSTRAINT "FK_c8f3f699a2d2212425403ee5972" FOREIGN KEY ("user_id") REFERENCES "app_pbgp"."pbgp_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_border_review_score" ADD CONSTRAINT "FK_746c48c7645ab24acaaccff610e" FOREIGN KEY ("application_id") REFERENCES "app_pbgp"."pbgp_application"("application_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_border_review_score" DROP CONSTRAINT "FK_746c48c7645ab24acaaccff610e"`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_border_review_score" DROP CONSTRAINT "FK_c8f3f699a2d2212425403ee5972"`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_application" DROP CONSTRAINT "FK_5783a8c139f9aebc3c08feb0436"`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_application" DROP CONSTRAINT "FK_5542578e778e096d2502a95ec1f"`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_application" DROP CONSTRAINT "FK_bab74b4141c1720bed375a4d2a4"`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_comment" DROP CONSTRAINT "FK_cf5dd0252811f945a0e60b34096"`
    );
    await queryRunner.query(
      `ALTER TABLE "app_pbgp"."pbgp_comment" DROP CONSTRAINT "FK_aaece98bf11e4e6e23b40b32dd7"`
    );
    await queryRunner.query(`DROP TABLE "app_pbgp"."pbgp_border_review_score"`);
    await queryRunner.query(`DROP TABLE "app_pbgp"."pbgp_attachment"`);
    await queryRunner.query(`DROP TABLE "app_pbgp"."pbgp_application"`);
    await queryRunner.query(`DROP TABLE "app_pbgp"."pbgp_comment"`);
    await queryRunner.query(`DROP INDEX "app_pbgp"."IDX_0324c9f00ebd3c636b34a56658"`);
    await queryRunner.query(`DROP TABLE "app_pbgp"."pbgp_user"`);
    await queryRunner.query(`DROP TABLE "app_pbgp"."pbgp_form_metadata"`);
  }
}
