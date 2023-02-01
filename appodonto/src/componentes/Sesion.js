import React from "react";

function Sesion() {
    return (
        <div>
            <div className="container">
                <div class="col-xs-6 col-md-6 container my-color my-img-two" ><br /><br />
                    <h1 class="text-center mb-4">Iniciar sesión</h1>
                    <img src="img/sesion1.png"/><br></br>
                    <form name="form-registro" id="form-registro" method="post" action="index_guarda.php">

                        <div class="form-floating mb-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text w-25"><i class="fas fa-fingerprint me-2 text-secondary"></i>Usuario:</span>
                                <input type="text" class="form-control py-3" name="clave_unica" id="clave_unica" maxlength="18" placeholder="Ingrese su nombre" required />
                            </div>
                            <div id="clave_unica_validate"></div>
                        </div>

                        <div class="form-floating mb-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text w-25"><i class="fas fa-at me-2 text-secondary"></i>Contraseña:</span>
                                <input type="text" class="form-control py-3" name="correo_electronico" id="correo_electronico" placeholder="Correo electr&oacute;nico" required />
                            </div>
                            <div id="correo_electronico_validate"></div>
                        </div>

                        <div class="form-floating mb-3">

                        </div>
                        <input type="submit" id="reservar" class="btn btn-primary mt-2" value="Registrarse" />
                    </form>
                    <div id="status"></div>
                </div>
            </div><br/><br/><br/><br/><br/><br/>
            
        </div>
        
    )
}
export default Sesion;