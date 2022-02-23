import { connection } from "../data/connection"
import {Request, Response} from 'express'

export const changeTurmaDocente = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    
    const {professorId, turmaId} = req.body

    if (!professorId || !turmaId) {
      errorCode = 422
      throw new Error('É necessário informar todos os atributos necessários.')
    }

    const checkProfessorId = await connection('P_labenuSystem_Docentes').where('id', professorId)
    const checkTurmaId = await connection('P_labenuSystem_Turmas').where('id', turmaId)

    if (checkTurmaId.length === 0 && checkProfessorId.length === 0) {
      errorCode = 404
      throw new Error('Professor e Turma não encontrados')
    }

    if (checkProfessorId.length === 0) {
      errorCode = 404
      throw new Error('Professor não encontrado')
    }

    if (checkTurmaId.length === 0) {
      errorCode = 404
      throw new Error('Turma não encontrada')
    }

    await connection.raw(`
      UPDATE P_labenuSystem_Docentes
      SET turma_id = '${turmaId}'
      WHERE id = '${professorId}'
    `)

    res.status(200).send('Turma alterada com sucesso.')

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}