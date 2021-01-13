"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(letter) {
        return {
            id: letter.id,
            nome: letter.nome,
            idade: letter.idade,
            assunto: letter.assunto,
            mensagem: letter.mensagem,
        };
    },
    renderMany(letters) {
        return letters.map(letter => this.render(letter));
    }
};
