const mongoose =require('mongoose')
const Schema = mongoose.Schema
const UsuarioSchema = new Schema({
    'nombre': String,
    'apellido':String,
    'sapellido': String,
    'correoelectronico': String 
})

module.exports= mongoose.model(
    'usuario',UsuarioSchema
)