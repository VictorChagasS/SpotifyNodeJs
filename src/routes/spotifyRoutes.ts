import express from 'express'
const route = express.Router()

route.use('/',(req,res)=>{
    res.render('index')
})

route.use('/K',(req,res)=>{
    res.send("PAGINA k")
})

export default route