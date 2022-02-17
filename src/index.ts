import app from './app'
import { createDocente } from './endpoints/createDocente'
import { getDocentes } from './endpoints/getDocentes'

app.post('/docentes', createDocente)

app.get('/docentes', getDocentes)