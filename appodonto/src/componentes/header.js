import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Sesion from './Sesion';
import { BsHouseDoorFill, BsCalendar2MonthFill, BsFillPersonFill, BsFillPersonPlusFill,BsList } from "react-icons/bs";
import Home from "./Home";
import Citas from "./Citas";
import Registrarse from "./Registrarse";
import Resina from "./Resina";
import Ortodoncia from "./Ortodoncia";
import Carillas from "./Carillas";
import Listar from "./listarcitas";
import EditarCit from "./EditarCita";

function Header() {
    const style = {
        backgroundImage: "url('img/consultorio.jpg')",
        height: '350px',


    };
    const style1 = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    };
    const letra = {
        fontsize: 1000,
    }
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-sm  fixed-top navbar-light bg-white ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation"         >
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse  navbar-collapse " id="navbarExample01 ">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item active  ">
                                    <Link class="nav-link text-black" to="/"> <BsHouseDoorFill color="black" size={20} /> &nbsp; Principal</Link><br></br>                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-black" to="Citas"><BsCalendar2MonthFill color="black" size={20} /> &nbsp;Citas</Link><br></br>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-black" to="Sesion"><BsFillPersonFill color="black" size={20} /> &nbsp;Iniciar Sesión</Link><br></br>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-black" to="Registrarse"><BsFillPersonPlusFill color="black" size={20} />&nbsp;Registrarse</Link><br></br>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-black" to="listarCita"><BsList color="black" size={20} />&nbsp;Listar cita</Link><br></br>
                                </li>
                                
                            </ul>
                        </div>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                                <button class="btn btn-outline-primary" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav><br /><br />

                <div class="p-5 fixed text-center bg-image" style={style} >
                    <div class="mask"  >
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="text-white">
                                <h1 class="mb-3 text-black" style={letra}>Clínica Dental</h1>
                                <h4 class="mb-3" >Sierra Sur</h4>
                                <Link class=" btn btn-outline-light btn-lg" to="Registrarse">&nbsp; Registrarse</Link><br></br>

                            </div>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="Citas" element={<Citas />} />
                    <Route exact path="Sesion" element={<Sesion />} />
                    <Route exact path="Registrarse" element={<Registrarse />} />
                    <Route exact path="ortodoncia" element={<Ortodoncia />} />
                    <Route exact path="resina" element={<Resina />} />
                    <Route exact path="carillas" element={<Carillas />} />
                    <Route exact path="listarCita" element={<Listar />} />
                    <Route exact path="editarcita/:id" element={<EditarCit />} />
                </Routes>
            </Router>
        </div>

    );



}

export default Header;

