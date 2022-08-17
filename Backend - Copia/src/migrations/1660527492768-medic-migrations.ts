import { MigrationInterface, QueryRunner } from "typeorm";

export class medicMigrations1660527492768 implements MigrationInterface {
    name = 'medicMigrations1660527492768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "number" integer NOT NULL, "city" character varying NOT NULL, "zip_code" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "birth_date" character varying NOT NULL, "email" character varying NOT NULL, "address_id" uuid NOT NULL, "medic_id" uuid NOT NULL, CONSTRAINT "REL_f483f0de5daf9ee8cf5c95bf93" UNIQUE ("address_id"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_fba392374adf2a19a129f029c8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "patients" ADD CONSTRAINT "FK_f483f0de5daf9ee8cf5c95bf932" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patients" ADD CONSTRAINT "FK_596666ad5d10a035a67db65ed30" FOREIGN KEY ("medic_id") REFERENCES "medics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" DROP CONSTRAINT "FK_596666ad5d10a035a67db65ed30"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP CONSTRAINT "FK_f483f0de5daf9ee8cf5c95bf932"`);
        await queryRunner.query(`DROP TABLE "medics"`);
        await queryRunner.query(`DROP TABLE "patients"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
