import app from './app'
import { getDocentes } from './endpoints/getDocentes'
import { getTurmas } from './endpoints/getTurmas'
import { getEstudante } from './endpoints/getEstudante'
import { getUsersByTurma } from './endpoints/getUsersByTurma'
import { createDocente } from './endpoints/createDocente'
import { createEstudante } from './endpoints/createEstudante'
import { createTurma } from './endpoints/createTurma'
import { changeTurmaDocente } from './endpoints/changeTurmaDocente'
import { changeTurmaEstudante } from './endpoints/changeTurmaEstudante'
import { changeModuloTurma } from './endpoints/changeModuloTurma'

app.get('/docentes', getDocentes)

app.get('/estudantes', getEstudante)

app.get('/turmas', getTurmas)

app.get('/users', getUsersByTurma)

app.post('/docentes', createDocente)

app.post('/estudantes', createEstudante)

app.post('/turmas', createTurma)

app.put('/docentes', changeTurmaDocente)

app.put('/estudantes', changeTurmaEstudante)

app.put('/turmas', changeModuloTurma)

