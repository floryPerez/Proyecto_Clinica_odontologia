const express = require('express');
const Usuario =require('../model/usuarioModel')
const router = express.Router()

//Renderizar el index.ejs
router.get('/', (req, res) => {
    console.log('Hola')
    res.render('index')
});

//Agregar registro
router.post('/agregarRegistro', async (req, res) => {
    const usuario = new Usuario(req.body)
    console.log(usuario)
    await usuario.save();
    res.redirect('/obtenerRegistros');

})

//Eliminar registro

router.get('/eliminarRegistro/:id', async (req, res) => {
    
    const { id } = req.params
    await Usuario.remove({ _id: id })
    //const task = Task.find()
    res.redirect('/obtenerRegistros')
    //res.send(task)
    //res.json(task)
})

//obtener todos los registros
router.get('/obtenerRegistros', async (req, res) => {
    const usuario = await Usuario.find();
    res.json(usuario)
})
//obtener un registro
router.get('/obtenerRegistro/:id', async (req, res) => {
    const { id } = req.params
    const usuario = await Usuario.findById(id)
    res.json(usuario)
})  

//Editar un registro
router.post('/editarRegistro/:id', async (req, res) => {   
    const { id } = req.params
    await Usuario.update({ _id: id }, req.body)
    res.redirect('/obtenerRegistros')
})

module.exports = router;