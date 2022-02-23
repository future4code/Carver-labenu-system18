import { Request, Response} from 'express'
import { connection } from "../data/connection"
import { dateToString } from "../dateToString"

export const getEstudantes = async(req:Request, res:Response):Promise<void> =>{
   let errorCode = 400
   try {

      const hobby = req.query.hobby
      const nome = req.query.nome

      let result = await connection.raw('SELECT * FROM P_labenuSystem_Estudantes')

      if (hobby) result = await connection.raw(`
      SELECT E.nome as nome_estudante, E.data_nascimento, T.nome as turma, H.nome as hobby
      FROM P_labenuSystem_Estudantes E
      INNER JOIN P_labenuSystem_Estudantes_Hobbies EH ON E.id = EH.estudante_id
      INNER JOIN P_labenuSystem_Hobbies H ON H.id = EH.hobby_id
      INNER JOIN P_labenuSystem_Turmas T ON E.turma_id = T.id
      WHERE H.nome like '%${hobby}%'
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