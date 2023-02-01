import React from 'react';
import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import { Route, Routes } from 'react-router-dom';


class Footer extends React.Component {

    render() {
        const style = {
            backgroundColor:"#4494bb",
            height: '450px',


        };

        return (
            <div class="footer-expand-sm " style={style}>

            <footer class="text-center text-lg-start border border-white  mt-xl-5 pt-4">
            <div class="container p-4">
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 my-li">
                  <h5 class="text-uppercase mb-4">Acerca de</h5>
        
                  <ul class="list-unstyled mb-4">
                    <li>
                      <p class="text-white">Acerca de</p>
                    </li>
                    <li>
                      <p class="text-white">Principal</p>
                    </li>
                    <li>
                      <p class="text-white">Citas</p>
                    </li>
                    <li>
                      <p class="text-white">Iniciar Sesión</p>
                    </li>
                    <li>
                      <p class="text-white">Registrarse</p>
                    </li>
                  </ul>
                </div>
        
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 my-li">
                  <h5 class="text-uppercase mb-4">Especialidades</h5>
        
                  <ul class="list-unstyled">
                    <li>
                      <p class="text-white">Ortodoncia</p>
                    </li>
                    <li>
                      <p class="text-white">Carilla Dental</p>
                    </li>
                    <li>
                        <p class="text-white">Resinas</p>
                    </li>
                    <li className='text-white'>
                    <BsFacebook color="4267B2" size={20} />&nbsp;  Facebook                        
                           
                    </li>
                    <li className='text-white'>
                    <BsTwitter color="1DA1F2" size={20} /> &nbsp;  twitter
                    </li>
                    <li className='text-white'>
                    <BsYoutube color="FF0000" size={20} /> &nbsp;  Youtube
                    </li>
                  </ul>
                  
                </div>
        
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 my-img ">
                        
                  <ul class="list-unstyled my-txt">
                    <li>
                      <img class="my-card-img " src="img/logo1.png"/>   
                      <p>La Clínica Dental, está conformada por un grupo de odontólogos especializados en tratamientos correctivos y estéticos, preocupados por el bienestar y la salud de la sociedad mexicana, ofrecemos alternativas con tecnología de punta para garantizar la calidad de nuestro servicio.</p>
                    </li>
                  </ul>
                </div>
        
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 class="mb-4">Inicie sesión</h5>
        
                  <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" class="form-control" />
                     <label class="form-label " for="form5Example2">Correo electrónico</label>
                     <button type="submit" class="btn btn-outline-white btn-block">Regístrese</button>
                  </div>
        
                </div>
                
              </div>
            </div>

            
        
            <div class="text-center p-3 border-top border-white">
              <a class="text-black" href="https://OdontoUnsis.com/">OdontoUnsis.com</a>
            </div>
          </footer>          
        </div>
        )
    }

}

export default Footer;