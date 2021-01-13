import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('letters')
export default class Letter {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    assunto: string;

    @Column()
    mensagem: string;
}