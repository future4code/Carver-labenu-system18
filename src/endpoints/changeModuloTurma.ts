import { Request, Response } from "express";
import { connection } from "../data/connection";


export const changeModuloTurma = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { turmaId, modulo } = req.body

    if (!turmaId || !modulo) {
      errorCode = 422
      throw new Error('Verifique se todas as informações necessárias foram passadas')
    }

    if (modulo > 6 || modulo < 0) {
      errorCode = 422
      throw new Error('O modulo deve ser um valor entre 0 (inativo) e 6')
    }

    const checkTurma = await connection('P_labenuSystem_Turmas').where('id', turmaId)

    if (checkTurma.length === 0) {
      errorCode = 404
      throw new Error('Turma não encontrada')
    }

    await connection.raw(`
      UPDATE P_labenuSystem_Turmas
      SET modulo = ${modulo}
      WHERE id = '${turmaId}'
    `)

    res.status(200).send('Módulo da turma atualizado com sucesso')

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}