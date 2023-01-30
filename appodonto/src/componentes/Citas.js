
import React, { useState } from "react";
import axios from "axios";

function Citas() {


    const [curp, setCurp] = useState("")
    const [papellido, setPapellido] = useState("")
    const [sapellido, setSapellido] = useState("")
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [correo, setCorreo] = useState("")
    const [servicios, setServicios] = useState("")
    const [lprocedencia, setLprocedencia] = useState("")



    const guardarRegistro = async (e) => {
        console.log("por aqui")
        e.preventDefault();
        try {
            console.log("Ingresando")
            await axios.post("http://localhost:4000/cita/agregarRegistro", {
                curp,
                papellido,
                sapellido,
                nombre,
                telefono,
                correo,
                servicios,
                lprocedencia


            })
            //navigate("/")
        } catch (error) {
            console(error)
        }
    }
    return (
        <div>
            <div class="col-xs-6 col-md-6 align-center container my-color"><br /><br />
            <h1 >Contáctanos</h1><br /><br />
            
                <h2 class="text-center fs-3 blockquote" >Pide tu Cita o Contáctanos</h2><br /><br />
                <h3 class="text-center display-6 fs-4  blockquote-footer">
Llene el formulario a continuación, realiza tu consulta, como deseas ser contactado y nos pondremos en contacto con usted durante nuestras horas de trabajo.</h3><br /><br />

                <form onSubmit={guardarRegistro} name="form-registro" id="form-registro" method="post" action="index_guarda.php">

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>CURP:</span>
                            <input type="text" class="form-control py-3" value={curp} onChange={(e) => setCurp(e.target.value)} name="clave_unica" id="clave_unica" maxlength="18" placeholder="Clave Única de Registro de Poblacion" required />
                        </div>
                        <div id="clave_unica_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-user me-2 text-secondary"></i>Primer apellido:</span>
                            <input type="text" class="form-control py-3" value={papellido} onChange={(e) => setPapellido(e.target.value)} name="apellido_paterno" id="apellido_paterno" placeholder="Paterno" aria-label="Paterno" />
                        </div>
                        <div id="apellido_paterno_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-user me-2 text-secondary"></i>Segundo apellido:</span>
                            <input type="text" class="form-control py-3" value={sapellido} onChange={(e) => setSapellido(e.target.value)} name="apellido_materno" id="apellido_materno" placeholder="Materno" aria-label="Materno" />
                        </div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-user me-2 text-secondary"></i>Nombre(s):</span>
                            <input type="text" class="form-control py-3" value={nombre} onChange={(e) => setNombre(e.target.value)} name="nombres" id="nombres" placeholder="Nombre(s)" aria-label="Nombre(s)" />
                        </div>
                        <div id="nombres_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-phone me-2 text-secondary"></i>Teléfono:</span>
                            <input type="text" class="form-control py-3" value={telefono} onChange={(e) => setTelefono(e.target.value)} name="telefono" id="telefono" maxlength="10" placeholder="No. personal o contacto" required />
                        </div>
                        <div id="telefono_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-at me-2 text-secondary"></i>Correo electrónico:</span>
                            <input type="text" class="form-control py-3" value={correo} onChange={(e) => setCorreo(e.target.value)} name="correo_electronico" id="correo_electronico" placeholder="Correo electr&oacute;nico" required />
                        </div>
                        <div id="correo_electronico_validate"></div>
                    </div>

                    <div class="form-floating mb-3">
                        <form>
                            <label class="form-label">Servicios:</label>
                            <div class="form-floating mb-3">

                                <select value={servicios.value} onChange={(e)=>setServicios(e.target.value)} name="" id="" class="form-select">
                                    <option value="Examen Bucodental Inicial">
                                        Examen Bucodental Inicial
                                    </option>
                                    <option value="Procedimientos de obturación o llenado dental">
                                        Procedimientos de obturación o llenado dental
                                    </option>
                                    <option value="Extracciones dentales">
                                        Extracciones dentales
                                    </option>
                                    <option value="Servicios de limpieza dental">
                                        Servicios de limpieza dental
                                    </option>
                                    <option value="Ortodoncia  ">
                                        Ortodoncia                           
                                    </option>
                                    <option value=" Exámenes de rutina">
                                        Exámenes de rutina
                                    </option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="form-floating mb-3">
                        <div class="input-group mb-3">
                            <span class="input-group-text w-25"><i class="fas fa-phone me-2 text-secondary"></i>Lugar de procedencia:</span>
                            <input type="text" class="form-control py-3" value={lprocedencia} onChange={(e) => setLprocedencia(e.target.value)} name="lugarpro" id="lugarpro" maxlength="10" placeholder="Lugar de procedencia" required />
                        </div>
                        <div id="telefono_validate"></div>
                    </div>
                    <input type="submit" id="reservar" class="btn btn-primary mt-2" value="Agregar" />
                </form>
                <div id="status"></div><br /><br />

            </div>
            

        </div>
    )
}

export default Citas;   