import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ListarUsuario() {
    const [usuarios, setUsuarios] = useState([])//cuando es una lista de elementos se usan [] en los parentesis
    useEffect(() => {
        console.log('recuperando registros.')
        getUsuarios()
       
    }, [])

    const getUsuarios = async () => {
        const response = await axios.get("http://localhost:4000/obtenerRegistros")
        console.log('yo.')
        setUsuarios(response.data)

    }

    //Eliminar usuario
    const eliminarUsuario = async (id) => {
        try {
            await axios.get(`http://localhost:4000/eliminarRegistro/${id}`)
            getUsuarios()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className='align-center container my-color my-img-two'>
            <br></br>
            <img src="img/editar.png" /><br></br>
            <br></br>
            <h1 align="center">Listar usuarios</h1><br></br>
            <table class="table table-sm ">
                <thead className="table-primary">
                    <tr >
                        
                        <th scope="col">Apellido Paterno</th>
                        <th scope="col">Apellido Materno</th>
                        <th scope="col">Nombre (s)</th>                    
                        <th scope="col">Correo</th>                        
                        <th scope="col">Editar</th>
                        <th  scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody className="table-Light">

                    {usuarios.map((usuario, i) => (
                        <tr key={usuario._id}>                            
                            <td>{usuario.apellido}</td>
                            <td>{usuario.sapellido}</td>
                            <td>{usuario.nombre}</td>                            
                            <td>{usuario.correoelectronico}</td>                         
                            <td className="table-muted"><Link to={`../editarusuario/${usuario._id}`} className="button is-info is-small mr1" type="button">Editar</Link></td>
                            <td><button type="button" class="btn btn-danger" onClick={() => eliminarUsuario(usuario._id)}>Eliminar</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListarUsuario;