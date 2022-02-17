import connection from "../data/connection"
import {Request, Response} from 'express'
import { dateToString } from "../dateToString"

export const getDocentes = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const especialidade = req.query.especialidade
    const nome = req.query.nome

    let result = await connection.raw('SELECT * FROM P_labenuSystem_Docentes')

    if (especialidade) result = await connection.raw(`
      SELECT * 
      FROM P_labenuSystem_Docentes D
      INNER JOIN P_labenuSystem_Docentes_Especialidades DE ON P.id = DE.docente_id
      INNER JOIN P_labenuSystem_Especialidades E ON DE.especialidade_id = E.id
      WHERE E.nome = '${especialidade}'
    `)

    if (nome) result = await connection.raw(`SELECT * FROM P_labenuSystem_Docentes WHERE nome like '%${nome}%'`)

    console.log(result[0])

    res.send('ok')

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}