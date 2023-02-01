import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


function Home() {
    const divStyle = {
        backgroundImage: 'url("img/fondo.webp")',
    };


    return (
        <div style={divStyle} ><br /><br />
        <div className="my-color">
        <h1 class="font-size:100px m"> CLÍNICA DENTAL ODONTOUNSIS</h1><br /><br />
        </div>
            <div class="container">
                <div class="row">
                    <div class="g-col-1">
                    </div>
                    <div class="g-col-10">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner ">
                                <div class="carousel-item active">
                                    <img src="img/dentistas-en-monterrey-abierto-los-domingos-por-comodidad.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block my-new-color ">
                                        <h1>CLÍNICA DENTAL ODONTOUNSIS</h1>                                        
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="img/salud_bucodental.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block my-new-color">
                                        <h1>CLÍNICA DENTAL ODONTOUNSIS</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="img/dentista-sonrisa.webp" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block my-new-color">
                                        <h1>CLÍNICA DENTAL ODONTOUNSIS</h1>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="g-col-1">

                        </div>
                    </div>

                </div ><br /><br />


                <div class="row"><br /><br />
                    <h1 class="text-center fs-1"> Tratamientos Dentales Integrales</h1><br></br><br /><br />
                    <h2 class="text-center display-6 fs-4  blockquote-footer">Todos nuestros tratamientos y servicios se brindan en cómodas instalaciones con los más altos estándares de calidad.</h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="container mt-5 d-flex justify-content-center">
                                <div >
                                    <div class="my-card"> <img class="my-card-img" src="img/resina.jpg" />
                                        <div class="my-card-body trainer-card-body">
                                            <h5 class=" text-center blockquote">  <small> RESINAS DE ALTA ESTÉTICA</small></h5>
                                            <p class="text-justify ">Las resinas de alta estética es una solución para corregir: pequeñas imperfecciones, fracturas menores, caries, alteraciones de color, formas inadecuadas, dientes pequeños, etc.</p>
                                            <div class="social-icons">
                                                <a href="#"><i class="fa fa-tumblr"></i></a>
                                            </div>
                                            <Link class=" text-black my-card-btn" to="resina"> <BsPlusCircle color="black" size={20} /> &nbsp; Leer más</Link><br></br>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container mt-5 d-flex justify-content-center">
                                <div > 
                                    <div class="my-card"> <img class="my-card-img" src="img/sonrisa.webp"/>
                                        <div class="my-card-body trainer-card-body">
                                            <h5 class=" text-center blockquote"> <small> CARILLAS DENTALES</small></h5>
                                            <p class="text-justify ">Las carillas dentales son unas capas delgadas de porcelana hechas a la medida, que cubren la parte frontal de los dientes. Las carillas dentales, son del color del diente.</p>
                                            <div class="social-icons">
                                                <a href="#"><i class="fa fa-tumblr"></i></a>
                                            </div>
                                            <Link class=" text-black my-card-btn" to="carillas"> <BsPlusCircle color="black" size={20} /> &nbsp; Leer más</Link><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container mt-5 d-flex justify-content-center">
                                <div >
                                    <div class="my-card"> <img class="my-card-img" src="img/ortodoncias.webp" />
                                        <div class="my-card-body trainer-card-body">
                                            <h5 class=" text-center blockquote" > <small> ORTODONCIA</small></h5>
                                            <p class="text-justify ">Si tienes los dientes desalineados, la solución es el tratamiento de ortodoncia; en dónde los dientes se colocan en su posición adecuada, para así lograr su correcta función, etc. </p>
                                            <div class="social-icons">
                                                <a href="#"><i class="fa fa-tumblr"></i></a>
                                            </div>
                                            <Link class=" text-black my-card-btn" to="ortodoncia"> <BsPlusCircle color="black" size={20} /> &nbsp; Leer más</Link><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <br></br>
            </div >
        </div >

    )
}
export default Home;