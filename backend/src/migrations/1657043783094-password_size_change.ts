import { MigrationInterface, QueryRunner } from "typeorm";

export class passwordSizeChange1657043783094 implements MigrationInterface {
    name = 'passwordSizeChange1657043783094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users" DROP COLUMN "user_password"
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ADD "user_password" character varying(400) NOT NULL DEFAULT 'default'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users" DROP COLUMN "user_password"
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ADD "user_password" character varying(200) NOT NULL DEFAULT 'default'
        `);
    }

}
