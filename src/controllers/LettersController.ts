import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Letter from "../models/Letter";
import letterView from "../views/letters_view";
import * as Yup from "yup";

export default {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const lettersRepository = getRepository(Letter);

    const letter = await lettersRepository.findOneOrFail(id);

    return response.json(letterView.render(letter));
  },

  async index(request: Request, response: Response) {
    const lettersRepository = getRepository(Letter);

    const letters = await lettersRepository.find();

    return response.json(letterView.renderMany(letters));
  },

  async create(request: Request, response: Response) {
    const {
      nome,
      idade,
      assunto,
      mensagem,      
    } = request.body;

    const lettersRepository = getRepository(Letter);

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
