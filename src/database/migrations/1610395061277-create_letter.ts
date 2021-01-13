import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLetter1610395061277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'letters',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'idade',
                    type: 'integer'
                },
                {
                    name: 'assunto',
                    type: 'varchar'
                },
                {
                    name: 'mensagem',
                    type: 'text'
                }        
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('letters');
    }

}
