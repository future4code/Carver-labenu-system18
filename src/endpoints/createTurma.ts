import {Response, Request} from "express";

import { Turma } from "../class/Turma";
import { connection } from "../data/connection";


export const createTurma = async(req:Request, res:Response):Promise <void> =>{
   let errorCode = 400

   try {
      const id = "T"+Date.now().toString()
      const {nome, docentes, estudantes, modulo} = req.body;

      if(!nome || 
         !docentes || 
         !estudantes ||
         docentes.length === 0 ||
         estudantes.length === 0
         ){
         errorCode = 422   //Erro de falta de informação(422)
         throw new Error(`Por favor, verifique as informações novamente`)
      }

      
      const novaTurma = new Turma(id, nome, docentes, estudantes, modulo)

      const checkName = await connection("P_labenuSystem_Turmas").where("nome", nome)
      console.log(checkName)




      // if(checkName === ""){

      // }

      // await connection("P_labenuSystem_Turmas").insert(novaTurma)

      res.status(201).send(`Class was created with success`)
   } catch (error:any) {
      res.status(errorCode).send({message:error.message || error.sqlMessage})
   }
}