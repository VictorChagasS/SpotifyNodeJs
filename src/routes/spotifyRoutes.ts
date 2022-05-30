import { Router } from 'express'
import { listMusic, deleteMusic, index, createMusic } from '../controllers/spotifyController'

const routes = Router()

routes.get('/', listMusic)

routes.get('/create', createMusic)

routes.post('/deletar', deleteMusic)

routes.use(index)

export default routes
