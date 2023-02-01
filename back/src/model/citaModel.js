const mongoose =require('mongoose')
const Schema = mongoose.Schema
const CitasSchema = new Schema({
    'curp': String,
    'papellido':String,
    'sapellido': String,
    'nombre': String ,
    'telefono': String,
    'correo':String,
    'servicios': String,
    'lprocedencia': String

})

module.exports= mongoose.model(
    'citas',CitasSchema
)