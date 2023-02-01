const express = require('express');
const Cita =require('../model/citaModel')
const router = express.Router()

//Renderizar el index.ejs
router.get('/', (req, res) => {
    console.log('Hola')
    res.render('index')
});

//Agregar registro
router.post('/agregarRegistro', async (req, res) => {
    const cita = new Cita(req.body)
    console.log(cita)
    await cita.save();
    res.redirect('/obtenerRegistros');

})

//Eliminar registro

router.get('/eliminarRegistro/:id', async (req, res) => {
    
    const { id } = req.params
    await Cita.remove({ _id: id })
    //const task = Task.find()
    res.redirect('/obtenerRegistros')
    //res.send(task)
    //res.json(task)
})

//obtener todos los registros
router.get('/obtenerRegistros', async (req, res) => {
    const cita = await Cita.find();
    res.json(cita)
})
//obtener un registro
router.get('/obtenerRegistro/:id', async (req, res) => {
    const { id } = req.params
    const cita = await Cita.findById(id)
    res.json(cita)
})  

//Editar un registro
router.post('/editarRegistro/:id', async (req, res) => {   
    const { id } = req.params
    await Cita.update({ _id: id }, req.body)
    res.redirect('/obtenerRegistros')
})

module.exports = router;