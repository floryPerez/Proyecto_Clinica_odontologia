const express = require('express')
const app = express()
const cors= require("cors")
require('./src/db/database')
const bodyParser = require('body-parser')
const usuarioRouter =require('./src/routes/routerUsuario')
const citaRouter =require('./src/routes/routerCita')

app.use(bodyParser.urlencoded({     // para transformar json
    extended: true
}))
app.use(cors())
app.use(bodyParser.json())

app.use('/', usuarioRouter)
app.use('/cita', citaRouter)
app.get('/', (req, res)=>{
    res.send('hola Mundo')
})
app.listen(4000,function(){
    console.log("Servidor activo .....")
})
