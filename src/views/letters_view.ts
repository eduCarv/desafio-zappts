import Letter from '../models/Letter';

export default {
    render(letter: Letter) {
        return {
            id: letter.id,
            nome: letter.nome,
            idade: letter.idade,
            assunto: letter.assunto,
            mensagem: letter.mensagem,            
        };
    },

    renderMany(letters: Letter[]) {
        return letters.map(letter => this.render(letter));
    } 
};