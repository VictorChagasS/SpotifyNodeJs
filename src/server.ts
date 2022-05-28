import express from 'express'
import {engine} from 'express-handlebars'
import path from 'path'
import spotifyRoutes from './routes/spotifyRoutes'
const app = express()
app.use(express.static(path.join(__dirname, '/public')));
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout:'main'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

app.use(spotifyRoutes)
app.listen(8081,()=>{
    console.log("Servidor iniciado")})