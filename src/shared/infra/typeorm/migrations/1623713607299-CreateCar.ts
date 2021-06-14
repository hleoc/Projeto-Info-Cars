import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCar1623713607299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: "cars",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "placa",
            type: "varchar",
            length: "8",
            isNullable: false,
          },
          {
            name: "chassi",
            type: "varchar",
            length: "17",
            isNullable: false,
          },
          {
            name: "renavam",
            type: "varchar",
            length: "11",
            isNullable: false,
          },
          {
            name: "model",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "brand",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "year",
            type: "varchar",
            length: "4",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars");
  }
}
