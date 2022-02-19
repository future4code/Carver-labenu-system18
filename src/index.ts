import app from './app'
import { createDocente } from './endpoints/createDocente'
import { getDocentes } from './endpoints/getDocentes'
import { changeTurmaDocente } from './endpoints/changeTurmaDocente'
import { createTurma } from './endpoints/createTurma'
import { getTurmas } from './endpoints/getTurmas'
import { changeModuloTurma } from './endpoints/changeModuloTurma'
import { getUsersByTurma } from './endpoints/getUsersByTurma'

app.get('/docentes', getDocentes)

app.get('/turmas', getTurmas)

app.get('/users', getUsersByTurma)

app.post('/turmas', createTurma)

app.post('/docentes', createDocente)

app.put('/docentes', changeTurmaDocente)

app.put('/turmas', changeModuloTurma)

