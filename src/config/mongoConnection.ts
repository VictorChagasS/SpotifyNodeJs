import mongoose from 'mongoose'

const connection = () => main().then(() => console.log('Conectado ao mongoDB...')).catch(err => console.log(err))
async function main () {
  await mongoose.connect('mongodb://localhost:27017/sistemamusica')
}

export default connection
