import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Listar() {
    const [citas, setCitas] = useState([])//cuando es una lista de elementos se usan [] en los parentesis
    useEffect(() => {
        console.log('recuperando registros.')
        getCitas()
       
    }, [])

    const getCitas = async () => {
        const response = await axios.get("http://localhost:4000/cita/obtenerRegistros")
        console.log('yo.')
        setCitas(response.data)

    }

    //Eliminar usuario
    const eliminarCita = async (id) => {
        try {
            await axios.get(`http://localhost:4000/cita/eliminarRegistro/${id}`)
            getCitas()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className='align-center container my-color my-img-two'>
            <br></br>
            <img src="img/editar.png" /><br></br>
            <br></br>
            <h1 align="center">Listar citas</h1><br></br>
            <table class="table table-sm ">
                <thead className="table-primary">
                    <tr >
                        <th  scope="col">Curp</th>
                        <th scope="col">Apellido Paterno</th>
                        <th scope="col">Apellido Materno</th>
                        <th scope="col">Nombre (s)</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Servicios</th>
                        <th scope="col">Localidad</th>
                        <th scope="col">Editar</th>
                        <th  scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody className="table-Light">

                    {citas.map((cita, i) => (
                        <tr key={cita._id}>
                            <td className="table-primary">{cita.curp}</td>
                            <td>{cita.papellido}</td>
                            <td>{cita.sapellido}</td>
                            <td>{cita.nombre}</td>
                            <td>{cita.telefono}</td>
                            <td>{cita.correo}</td>
                            <td>{cita.servicios}</td>
                            <td>{cita.lprocedencia}</td>

                            <td className="table-muted"><Link to={`../editarcita/${cita._id}`} className="button is-info is-small mr1" type="button">Editar</Link></td>
                            <td><button type="button" class="btn btn-danger" onClick={() => eliminarCita(cita._id)}>Eliminar</button></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Listar;