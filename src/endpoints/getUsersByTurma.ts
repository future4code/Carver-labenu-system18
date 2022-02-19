import { Request, Response } from "express";
import { connection } from "../data/connection";
import { dateToString } from "../dateToString";


export const getUsersByTurma = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const turmaId: string = req.query.turmaId as string
    const turmaNome: string = req.query.turmaNome as string

    if (!turmaId && !turmaNome) {
      errorCode = 422
      throw new Error('ID ou Nome de Turma deve ser informado')
    }

    let result = await connection.raw(`
      SELECT * FROM P_labenuSystem_Docentes D
      UNION ALL 
      SELECT * FROM P_labenuSystem_Estudantes E
    `)

    if (turmaId) result = await connection.raw(`
      SELECT * FROM P_labenuSystem_Docentes D WHERE D.turma_id = '${turmaId}'
      UNION ALL 
      SELECT * FROM P_labenuSystem_Estudantes E WHERE E.turma_id = '${turmaId}'
    `)

    if (turmaNome) result = await connection.raw(`
      SELECT D.* FROM P_labenuSystem_Docentes D 
      INNER JOIN P_labenuSystem_Turmas T ON D.turma_id = T.id
      WHERE T.nome like '%${turmaNome}%'
      UNION ALL 
      SELECT E.* FROM P_labenuSystem_Estudantes E 
      INNER JOIN P_labenuSystem_Turmas T ON E.turma_id = T.id
      WHERE T.nome like '%${turmaNome}%'
    `)

    result = result[0]

    if (result.length === 0) {
      errorCode = 404
      throw new Error('Nenhuma turma encontrada')
    }

    for (let r of result) {
      r.data_nascimento = dateToString(r.data_nascimento)
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}