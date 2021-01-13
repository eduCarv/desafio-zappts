"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LettersController_1 = __importDefault(require("./controllers/LettersController"));
const routes = express_1.Router();
//Criar uma carta 
routes.post('/letters', LettersController_1.default.create);
//Listar cartas
routes.get('/letters', LettersController_1.default.index);
//Detalhe da carta
routes.get('/letters/:id', LettersController_1.default.show);
exports.default = routes;
