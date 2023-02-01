import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function EditarUsuario() {
    const navegate = useNavigate()
    const [apellido, setApellido] = useState("")
    const [sapellido, setSapellido] = useState("")
    const [nombre, setNombre] = useState("")
    const [correoelectronico, setCorreoelectronico] = useState("")
    const { id } = useParams();
    useEffect(() => {
        console.log('editando')
        obtenerCitaPorId()
    }, [])

    const obtenerCitaPorId = async () => {

        const response = await axios.get(`http://localhost:4000/obtenerRegistro/${id}`)
        setApellido(response.data.papellido)
        setSapellido(response.data.sapellido)
        setNombre(response.data.nombre)
        setCorreoelectronico(response.data.correo)

    }


    const actualizarUsuario = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/editarRegistro/${id}`, {
                apellido,
                sapellido,
                nombre,
                correoelectronico

            })
            navegate("/Listarcita") /// navegate para navegar entre paginas

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="col-xs-6 col-md-6 align-center container my-color">
            <h1 class="text-center">Editar Usuario</h1>

            <form onSubmit={actualizarUsuario} name="form-registro" id="form-registro" method="post">

                <div class="form-floating mb-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Primer apellido:</span>
                        <input type="text" class="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                </div>

                <div class="form-floating mb-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Segundo apellido:</span>
                        <input type="text" class="form-control" value={sapellido} onChange={(e) => setSapellido(e.target.value)} />
                    </div>

                </div>

                <div class="form-floating mb-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Nombre:</span>
                        <input type="text" class="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                </div>


                <div class="form-floating mb-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Correo:</span>
                        <input type="text" class="form-control" value={correoelectronico} onChange={(e) => setCorreoelectronico(e.target.value)} />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" >Actualizar</button>
            </form>
        </div>
    )
}

export default EditarUsuario;