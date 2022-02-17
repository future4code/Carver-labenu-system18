import { UserInterface } from "../interfaces/userInterface";

export class User implements UserInterface {
  constructor(
    public email: string,
    public data_nascimento: string,
    public turma_id: string
  ){
    this.email = email,
    this.data_nascimento = data_nascimento,
    this.turma_id = turma_id
  }
}