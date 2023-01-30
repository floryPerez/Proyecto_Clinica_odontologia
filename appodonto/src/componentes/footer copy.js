import React from 'react';
import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import { Route, Routes } from 'react-router-dom';


class Footer extends React.Component {

    render() {
        const style = {
            backgroundImage: "url('img/fondo2.jpg')",
            height: '450px',


        };

        return (
          <div class=" text-center " style={style}>
                <footer class="py-5">
                    <div class="row">
                        <div class="col-2  ">
                            <h5 className='text-white'>Información</h5>
                            <ul class="nav flex-column text-white ">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white">Inicio</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white">Acerca de nosotros</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white">Registrarse </a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white">Iniciar sesión</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white">Generar </a></li>
                            </ul>
                        </div>
                        <div class="col-4 offset-1 ">
                            <form>
                                <h5 class="text-white">Suscríbete en nuestro sitio web</h5>
                                <p className='text-white'>Acerca de nosotros.</p>
                                <div class="d-flex w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden text-white">Correo Electrónico</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Correo electrónico    " />
                                    <button class="btn btn-success" type="button">Suscribirse</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between py-4 my-4 border-top justify-content-center">
                        <p class="text-white">&copy; 2022 Compañía, Inc.Todos los derechos reservados.</p>
                        <ul class="list-unstyled d-flex ">
                            <a class=" text-white text-center" href="#"><BsFacebook color="4267B2" size={20} />&nbsp;  Facebook<svg width="250" height="24"></svg></a>
                            <a class="text-white" href="#"><BsTwitter color="1DA1F2" size={20} /> &nbsp;  twitter<svg width="250" height="24"></svg></a>
                            <a class="text-white" href="#"><BsYoutube color="FF0000" size={20} /> &nbsp;  Youtube<svg width="250" height="34"></svg></a>
                        </ul>
                    </div>
                </footer>
            </div>
        )

    }

}

export default Footer;