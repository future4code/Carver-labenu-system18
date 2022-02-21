# LabenuSystem

### Detalhes:

O objetivo deste projeto é criar um sistema que simula a plataforma
da Labenu e sua organização, contando com toda a lógica desenvolvida através dos passos e tecnologias citadas ao longo deste documento.

### Integrantes:

- Cesar Huber - https://www.linkedin.com/in/cesar-huber/
- Cassiano Moura - https://www.linkedin.com/in/moura-cassiano/

### Link Documentação: 
https://documenter.getpostman.com/view/18385621/UVkjxJF9

## Tecnologias

As tecnologias utilizados ao longo do projeto foram: Node.js,
TypeScript, Mysql.

## Dependências

    -Express.js
    -Knex.js
    -Cors
    -Dotenv

## Passos de execução do projeto:

1. Criação de 3 classes principais, são elas: Turma, Estudantes e Docentes,
   cada uma delas, contando com um papel bem definido:

- Estudante: Representa estudantes da nossa instituição. Eles devem
  possuir: id, nome, email, data de nascimento e os principais hobbies dele.

- Docente: Representa docentes da nossa instituição. Eles devem
  possuir: id, nome, email, data de nascimento e todas as especialidades
  dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript,
  Programação Orientada a Objetos e Backend.

- Turma: Toda turma é composta das seguintes características: id, nome,
  data de início, data de término, lista de professores responsáveis, uma
  lista de alunos e módulo atual em que a turma está.

2. Implementação de requisições com instâncias de classe.

3. Integração de toda a aplicação ao Banco de Dados MySQL.

## Funcionalidades

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id.

<!--
 #
Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização.

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele.

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id -->
