"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLetter1610395061277 = void 0;
const typeorm_1 = require("typeorm");
class createLetter1610395061277 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('letters');
    }
}
exports.createLetter1610395061277 = createLetter1610395061277;
