import { User } from "./User"

export class Docente extends User {
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nascimento: string,
    turma_id: string,
    private especialidades: string[]
  ){super(id, nome, email, data_nascimento, turma_id)
  }

  public getDocenteFullInfo() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      data_nascimento: this.data_nascimento,
      turma_id: this.turma_id,
      especialidades: this.especialidades
    }
  }

  public getDocenteBasicInfo() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      data_nascimento: this.data_nascimento,
      turma_id: this.turma_id
    }
  }

  public getDocenteEspecialidades() {
    return this.especialidades
  }
}