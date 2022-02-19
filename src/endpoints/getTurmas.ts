import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getTurmas = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const nome: string = req.query.nome as string
    const id: string = req.query.id as string
    const ativas: string = req.query.ativas as string

    let result = await connection('P_labenuSystem_Turmas')

    if (ativas === 'true') result = await connection('P_labenuSystem_Turmas').where('modulo', '>', 0)

    if (nome) result = await connection('P_labenuSystem_Turmas').where('nome', 'like', `%${nome}%`)

    if (id) result = await connection('P_labenuSystem_Turmas').where('id', id)

    if (result.length === 0) {
      errorCode = 404
      throw new Error('Turma não encontrada')
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}