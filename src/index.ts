import app from './app'
import { createDocente } from './endpoints/createDocente'
import { getDocentes } from './endpoints/getDocentes'
import { changeTurmaDocente } from './endpoints/changeTurmaDocente'
import { createTurma } from './endpoints/createTurma'
import { getTurmas } from './endpoints/getTurmas'
import { changeModuloTurma } from './endpoints/changeModuloTurma'
import { getUsersByTurma } from './endpoints/getUsersByTurma'
import { getEstudantes } from './endpoints/getEstudante'
import { createEstudante } from './endpoints/createEstudante'
import { changeTurmaEstudante } from './endpoints/changeTurmaEstudante'

app.get('/turmas', getTurmas)

app.get('/estudantes', getEstudantes)

app.get('/docentes', getDocentes)

app.get('/users', getUsersByTurma)

app.post('/turmas', createTurma)

app.post('/estudantes', createEstudante)

app.post('/docentes', createDocente)

app.put('/turmas', changeModuloTurma)

app.put('/estudantes', changeTurmaEstudante)

app.put('/docentes', changeTurmaDocente)


