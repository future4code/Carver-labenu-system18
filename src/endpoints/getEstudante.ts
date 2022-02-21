import { Request, Response} from 'express'
import { connection } from "../data/connection"
import { dateToString } from "../dateToString"

export const getEstudantes = async(req:Request, res:Response):Promise<void> =>{
   let errorCode = 400
   try {

      const hobbies = req.query.hobbie
      const nome = req.query.nome

      let result = await connection.raw('SELECT * FROM P_labenuSystem_Estudantes')

      if (hobbies) result = await connection.raw(`
      SELECT D.nome as nome_estudante, D.data_nascimento, T.nome as turma, E.nome as hobbies
      FROM P_labenuSystem_Docentes D
      INNER JOIN P_labenuSystem_Estudantes_Hobbies DE ON D.id = DE.estudante_id
      INNER JOIN P_labenuSystem_Estudantes E ON DE.estudante_id = E.id
      INNER JOIN P_labenuSystem_Turmas T ON D.turma_id = T.id
      WHERE E.nome = '${hobbies}'
      `)

      if (nome) result = await connection.raw(`SELECT * FROM P_labenuSystem_Estudantes WHERE nome like '%${nome}`)

      result = result[0]

      if (result.length === 0) {
         errorCode = 404
         throw new Error('Não há nenhum registro com os dados informados.')
      }

      for ( let s of result) {
         s.data_nascimento = dateToString(s.data_nascimento)
      }

      res.status(200).send(result)

   }catch (error: any){
      res.send(errorCode).send({message: error.message || error.sqlMessage})
   }

}