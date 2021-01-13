import { Router } from 'express';
import LettersController from './controllers/LettersController';
const routes = Router();

//Criar uma carta 
routes.post('/letters', LettersController.create);

//Listar cartas
routes.get('/letters', LettersController.index);

//Detalhe da carta
routes.get('/letters/:id', LettersController.show);

export default routes;