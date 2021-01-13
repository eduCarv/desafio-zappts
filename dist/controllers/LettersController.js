"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Letter_1 = __importDefault(require("../models/Letter"));
const letters_view_1 = __importDefault(require("../views/letters_view"));
const Yup = __importStar(require("yup"));
exports.default = {
    async show(request, response) {
        const { id } = request.params;
        const lettersRepository = typeorm_1.getRepository(Letter_1.default);
        const letter = await lettersRepository.findOneOrFail(id);
        return response.json(letters_view_1.default.render(letter));
    },
    async index(request, response) {
        const lettersRepository = typeorm_1.getRepository(Letter_1.default);
        const letters = await lettersRepository.find();
        return response.json(letters_view_1.default.renderMany(letters));
    },
    async create(request, response) {
        const { nome, idade, assunto, mensagem, } = request.body;
        const lettersRepository = typeorm_1.getRepository(Letter_1.default);
        //Validação dos dados
        const data = {
            nome,
            idade,
            assunto,
            mensagem,
        };
        const schema = Yup.object().shape({
            nome: Yup.string().required('Nome obrigatório').min(5),
            idade: Yup.number().required('Idade obrigatória'),
            assunto: Yup.string().required('Assunto obrigatório').min(10),
            mensagem: Yup.string().required('Mensagem obrigatória').min(30).max(300),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const letter = lettersRepository.create(data);
        await lettersRepository.save(letter);
        return response.status(201).json(letter);
    }
};
