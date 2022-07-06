import { MigrationInterface, QueryRunner } from "typeorm";

export class users1657039763929 implements MigrationInterface {
    name = 'users1657039763929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ADD "verified" boolean NOT NULL DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ADD "verificationCode" text
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ALTER COLUMN "user_password"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ALTER COLUMN "user_password"
            SET DEFAULT 'default'
        `);
        await queryRunner.query(`
            CREATE INDEX "verificationCode_index" ON "dionysus"."users" ("verificationCode")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "dionysus"."verificationCode_index"
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ALTER COLUMN "user_password" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users"
            ALTER COLUMN "user_password" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users" DROP COLUMN "verificationCode"
        `);
        await queryRunner.query(`
            ALTER TABLE "dionysus"."users" DROP COLUMN "verified"
        `);
    }

}
