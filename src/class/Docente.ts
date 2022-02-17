import { Id } from "../interfaces/id";
import { User } from "./User";

export class Docente extends User implements Id {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public data_nascimento: string,
    public turma_id: string,
    protected especialidades: string[]
  ){
    super(email, data_nascimento, turma_id)
    this.id = id,
    this.nome = nome,
    this.especialidades = especialidades
  }
}