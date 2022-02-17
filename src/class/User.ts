export abstract class User {
  constructor(
    protected id: string,
    protected nome: string,
    protected email: string,
    protected data_nascimento: string,
    protected turma_id: string
  ) {
    this.id = id,
      this.nome = nome,
      this.email = email,
      this.data_nascimento = data_nascimento,
      this.turma_id = turma_id
  }

  public getUserInfo() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      data_nascimento: this.data_nascimento,
      turma_id: this.turma_id
    }
  }

  public getUserId() {
    return this.id
  }

  public getUserNome() {
    return this.nome
  }

  public getUserEmail() {
    return this.email
  }

  public getUserDataNascimento() {
    return this.data_nascimento
  }

  public getUserTurmaId() {
    return this.turma_id
  }
}