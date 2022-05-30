import { engine } from 'express-handlebars'
import path from 'path'

const config = (app:any) => {
  app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
  }))
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '../views'))
}

export default config
