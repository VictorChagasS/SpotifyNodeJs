import express from 'express'
import path from 'path'
import connectMongo from './config/mongoConnection'
import handlebarsConfig from './config/handlebarsConfig'
import spotifyRoutes from './routes/spotifyRoutes'

const app = express()
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))

// CONFIGURACAO DO HANDLEBARS
handlebarsConfig(app)

// USO DE ROTAS
app.use('/', spotifyRoutes)

// CONFIGURANDO MONGODB
connectMongo()

app.listen(8081, () => {
  console.log('Servidor iniciado...')
})
