import React, {  useState } from "react";
import axios from "axios";

function Registrarse() {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [sapellido, setSapellido] = useState("")
    const [correoelectronico, setCorreoelectronico] = useState("")


    const guardarRegistro = async (e) => {
        e.preventDefault();
        try {
            console.log("Ingresando")
            await axios.post("http://localhost:4000/agregarRegistro", {
                nombre,
                apellido,
                sapellido,
                correoelectronico
            })
            //navigate("/")
        } catch (error) {
            console(error)
        }
    }

    return (
        <div>
            <div class="col-xs-6 col-md-6 container my-color my-img-two"><br /><br />
                <h1 >Registrarse</h1>
                <img src="img/1.png"/><br></br>

                <form onSubmit={guardarRegistro}>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Nombre:</span>
                            <input type="text" class="form-control py-3" value={nombre} onChange={(e)=>setNombre(e.target.value)}  />
                        </div>
                        <div id="clave_unica_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-user me-2 text-secondary"></i>Primer apellido:</span>
                            <input type="text" class="form-control py-3" value={apellido} onChange={(e)=>setApellido(e.target.value)}  />
                        </div>
                        <div id="apellido_paterno_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-user me-2 text-secondary"></i>Segundo apellido:</span>
                            <input type="text" class="form-control py-3" value={sapellido} onChange={(e)=>setSapellido(e.target.value)}  />
                        </div>
                    </div>


                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-at me-2 text-secondary"></i>Correo electrónico:</span>
                            <input type="text" class="form-control py-3"  value={correoelectronico} onChange={(e)=>setCorreoelectronico(e.target.value)}/>
                        </div>
                        <div id="correo_electronico_validate"></div>
                    </div>

                    <div class="form-floating mb-3">

                    </div>

                    <input type="submit" id="reservar" class="btn btn-primary mt-2" value="Registrarse" />
                </form>
                <div id="status"></div>
            </div><br /><br /><br />

        </div>
    )
}
export default Registrarse;