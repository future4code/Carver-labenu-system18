import connection from "../data/connection"
import {Request, Response} from 'express'
import { Docente } from "../class/Docente"
import { stringToDate } from "../stringToDate"

export const createDocente = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = Date.now().toString()
    const {nome, email, data_nascimento, turma_id, especialidades} = req.body

    if (!nome || !email || !data_nascimento || !turma_id || !especialidades) {
      errorCode = 422
      throw new Error('Verifique as informações passadas e tente novamente. Todos os atributos devem ser informados e ao menos uma especialidade deve ser informada.')
    }

    const data_nasc = stringToDate(data_nascimento)
    const newDocente = new Docente(id, nome, email, data_nasc, turma_id, especialidades)

    const check = await connection('P_labenuSystem_Docentes').where('email', email)

    if (check.length > 0) {
      errorCode = 409
      throw new Error('Já existe um usuário cadastrado com este email.')
    }

    await connection('P_labenuSystem_Docentes').insert(newDocente.getDocenteBasicInfo())

    for (let i of especialidades) {
      const resultIdEspecialidade = await connection('P_labenuSystem_Especialidades').where('nome', i)
      const idDE = 'E' + Date.now().toString()
      const docenteEspecialidade = {
        id: idDE,
        docente_id: id,
        especialidade_id: resultIdEspecialidade[0].id
      }
      await connection('P_labenuSystem_Docentes_Especialidades').insert(docenteEspecialidade)
    }

    res.status(201).send('Docente registrado com sucesso')
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}