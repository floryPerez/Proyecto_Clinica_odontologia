import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function EditarCit() {
    const navegate = useNavigate()
    const [curp, setCurp] = useState("")
    const [papellido, setPapellido] = useState("")
    const [sapellido, setSapellido] = useState("")
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [correo, setCorreo] = useState("")
    const [servicios, setServicios] = useState("")
    const [lprocedencia, setLprocedencia] = useState("")
    const { id } = useParams();
    useEffect(() => {
        console.log('editando')
        obtenerCitaPorId()
    }, [])
    const obtenerCitaPorId = async () => {

        const response = await axios.get(`http://localhost:4000/cita/obtenerRegistro/${id}`)
        setCurp(response.data.curp)
        setPapellido(response.data.papellido)
        setSapellido(response.data.sapellido)
        setNombre(response.data.nombre)
        setTelefono(response.data.telefono)
        setCorreo(response.data.correo)
        setServicios(response.data.servicios)
        setLprocedencia(response.data.lprocedencia)
    }


    const actualizarCita = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/cita/editarRegistro/${id}`, {
                curp,
                papellido,
                sapellido,
                nombre,
                telefono,
                correo,
                servicios,
                lprocedencia
            })
            navegate("/Listarcita   ") /// navegate para navegar entre paginas

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="col-xs-6 col-md-6 align-center container my-color">
            <h1 class="text-center">Editar  citas</h1>
           
            <form onSubmit={actualizarCita} name="form-registro" id="form-registro" method="post">
                <div class="form-floating mb-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>CURP:</span>
                        <input type="text" class="form-control" value={curp} onChange={(e) => setCurp(e.target.value)} />
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Primer apellido:</span>
                        <input type="text" class="form-control" value={papellido} onChange={(e) => setPapellido(e.target.value)} />
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
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Telefono:</span>
                        <input type="text" class="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <label class="form-label"></label>
                </div>

                <div class="form-floating mb-3">
                <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Correo:</span>
                        <input type="text" class="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                </div>

                <div class="form-floating mb-3">
                <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Servicios:</span>
                        <input type="text" class="form-control" value={servicios} onChange={(e) => setServicios(e.target.value)} />
                    </div>
                </div>
                <div class="form-floating mb-3">
                <div class="input-group mb-3">
                        <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Lugar de procedencia:</span>
                        <input type="text" class="form-control" value={lprocedencia} onChange={(e) => setLprocedencia(e.target.value)} />
                    </div>
                </div>


                <button type="submit" class="btn btn-primary" >Actualizar</button>
            </form>
        </div>
    )
}

export default EditarCit;