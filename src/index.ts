import app from './app'
import { createDocente } from './endpoints/createDocente'
import { getDocentes } from './endpoints/getDocentes'
import { changeTurmaDocente } from './endpoints/changeTurmaDocente'

app.post('/docentes', createDocente)

app.get('/docentes', getDocentes)

app.put('/docentes', changeTurmaDocente)