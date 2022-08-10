
import PORTADA_TABLAS_TECNICAS from '../../assets/images/informaciontecnica/juntasempaques/TABLA_TECNICA.png';
import PORTADA_TABLAS_DE_CONVERSIONES from '../../assets/images/informaciontecnica/juntasempaques/TABLA_DE_CONVERSIONES.jpg';
import PORTADA_BOLETINES_TECNICOS from '../../assets/images/informaciontecnica/juntasempaques/BOLETINES_TECNICOS.jpg';
import PORTADA_CONSEJOS_TECNICOS from '../../assets/images/informaciontecnica/juntasempaques/CONSEJOS_TECNICOS.jpg';
export default class SectionInfoTecnica {

    render() {
        return /*html*/ `
             <section class="container" id="noticiasSection" style="padding-top:50px;padding-bottom:50px;margin-top:100px;">
                <div class="blog-home5 py-5">
                    <div class="container">
                    <!-- Row  -->
                    <div class="row justify-content-center mb-5">
                        <!-- Column -->
                        <div class="col-md-8 text-center">
                            <h2 class="fw-bold display-4 mb-3">Juntas y empaques</h2>
                        </div>
                        <!-- Column -->
                    </div>
                    <!-- Row  -->
                    <div class="documents-container">
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                            <img class="card-img border-15 img-technical-info" src="${PORTADA_TABLAS_TECNICAS}" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <h2 class="fw-bold">Tablas técnicas</h2>
                            <h6>Tablas nacionales y americanas</h6>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal" id="btnViewDetailsTablasTecnicas">Ver detalles</button>
                            </div>
                            <!--<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>-->
                            </div>
                        </div>

                        <!-- Column -->
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                            <img class="card-img border-15 img-technical-info" src="${PORTADA_TABLAS_DE_CONVERSIONES}" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <h2 class="fw-bold">Tablas de conversiones</h2>
                            <h6>Conversiones en medidas Newton-Metro a Libras-Pie, conversiones Litros-Pulgadas</h6>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red overflow-hidden text-white px-3 py-1 font-weight-normal" id="btnViewDetailsTablasConversiones">Ver detalles</button>                                
                            </div>                            
                            <!--<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>-->
                            </div>
                        </div>

                        <!-- Column -->
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                            <img class="card-img border-15 img-technical-info" src="${PORTADA_BOLETINES_TECNICOS}" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                                <h2 class="fw-bold">Boletines técnicos</h2>
                                <h6>Procedimientos y mejoras en la instalción de piezas automotrices, soluciones mecanicas</h6>
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-grad-red overflow-hidden text-white px-3 py-1 font-weight-normal" id="btnViewDetailsBoletinesTecnicos">Ver detalles</button>                                    
                                </div>
                                <br/><br/>
                            </div>
                        </div>

                        <!-- Column -->

                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                            <img class="card-img border-15 img-technical-info" src="${PORTADA_CONSEJOS_TECNICOS}" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <h2 class="fw-bold">Consejos técnicos</h2>
                            <h6>Te apoyamos con nuestras mejores prácticas</h6>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red overflow-hidden text-white px-3 py-1 font-weight-normal" id="btnViewDetailsConsejosTecnicos">Ver detalles</button>                                
                            </div>                            
                            <!--<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>-->
                            </div>
                        </div>

                        <!-- Column -->

                    </div>


                    <div class="row justify-content-center mt-5 mb-5">
                        <!-- Column -->
                        <div class="col-md-8 text-center">
                            <h2 class="fw-bold display-4 mb-3">Pistones</h2>
                        </div>
                        <!-- Column -->
                    </div>

                    <div class="documents-container">
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15">
                            <img class="card-img border-15" src="https://via.placeholder.com/640x360" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal">Ver detalles</button>
                                
                            </div>
                            <h4 class="my-3 font-weight-normal">Documento #1</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15">
                            <img class="card-img border-15" src="https://via.placeholder.com/640x360" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal">Ver detalles</button>
                                
                            </div>
                            <h4 class="my-3 font-weight-normal">Documento #2</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15">
                            <img class="card-img border-15" src="https://via.placeholder.com/640x360" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal">Ver detalles</button>
                                
                            </div>
                            <h4 class="my-3 font-weight-normal">Documento #3</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            </div>
                        </div>
                        <!-- Column -->                        
                        <!-- Column -->

                        <div class="card b-h-box position-relative font-14 mb-4 border-15">
                            <img class="card-img border-15" src="https://via.placeholder.com/640x360" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                            <div class="d-flex align-items-center">
                                <button class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal">Ver detalles</button>
                                
                            </div>
                            <h4 class="my-3 font-weight-normal">Documento #4</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            </div>
                        </div>
                        <!-- Column -->  
                    </div>
            
                    
                    </div>
                </div>
            </section>
        `;
    }
}