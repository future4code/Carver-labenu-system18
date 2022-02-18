import { connection } from "../data/connection"
import {Request, Response} from 'express'
import { dateToString } from "../dateToString"

export const getDocentes = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const especialidade = req.query.especialidade
    const nome = req.query.nome

    let result = await connection.raw('SELECT * FROM P_labenuSystem_Docentes')

    if (especialidade) result = await connection.raw(`
      SELECT D.nome as nome_professor, D.data_nascimento, T.nome as turma, E.nome as especialidade
      FROM P_labenuSystem_Docentes D
      INNER JOIN P_labenuSystem_Docentes_Especialidades DE ON D.id = DE.docente_id
      INNER JOIN P_labenuSystem_Especialidades E ON DE.especialidade_id = E.id
      INNER JOIN P_labenuSystem_Turmas T ON D.turma_id = T.id
      WHERE E.nome = '${especialidade}'
    `)

    if (nome) result = await connection.raw(`SELECT * FROM P_labenuSystem_Docentes WHERE nome like '%${nome}%'`)

    result = result[0]

    if (!result) {
      errorCode = 404
      throw new Error('Não foi encontrado nenhum registro com estas informações.')
    }

    for (let r of result) {
      r.data_nascimento = dateToString(r.data_nascimento)
    }

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}