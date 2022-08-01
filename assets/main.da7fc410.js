import{N as e,H as n,F as i,M as s,S as a,j as t,a as l}from"./es.6f328f29.js";class d{render(){return'\n        <div class="cube-layout">\n               <div class="cube-wrapper">\n                    <div class="cube-folding">\n                        <span class="leaf1"></span>\n                        <span class="leaf2"></span>\n                        <span class="leaf3"></span>\n                        <span class="leaf4"></span>\n                    </div>\n                    <span class="loading fw-bold" data-name="Loading">DC\n                        <span style="color: #e63a56">GASKETS</span>\n                    </span>\n                </div>\n        </div>\n        '}dissmiss(){document.querySelector(".cube-layout").remove()}}class o{render(){return'\n            \x3c!-- FOOTER --\x3e\n            <div class="modal fade" id="modalCompany" tabindex="-1" aria-labelledby="modalCompanyLabel" aria-hidden="true">\n                <div class="modal-dialog modal-xl modal-dialog-centered">\n                    <div id="modalContentCompany" class="modal-content">\n                        <div class="modal-header">\n                            <h5 class="modal-title text-center" id="modalCompanyLabel"><i class="fa-solid fa-building-columns"></i> DC Gaskets</h5>\n                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                        </div>\n                        <div class="modal-body">\n                            <div class="row pd-20-company-video">\n                                <div class="col-md-6">\n                                    <div class="embed-responsive embed-responsive-16by9">\n                                        <iframe class="embed-responsive-item border-15" width="100%" height="315" src="https://www.youtube.com/embed/dJIOc5vkH24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                                    </div>\n                                </div>\n                                <div class="col-md-6" style="height: 322px;overflow-y: scroll;">\n                                    <p class="lead text-black company-text-description i18nelement" data-i18n="key_company_description"></p>\n                                </div>                                \n                            </div>                           \n                        </div>                 \n                    </div>\n                </div>\n            </div>\n        '}}class c{constructor(e){switch(this.modalId=e.modalId,this.productType=e.productType,this.productImage=e.productImage,this.productDetails=e.productDetails,this.descriptionProducto="",this.datai18n="",this.nuevaTecnologia="",this.productType){case"Juntas":this.datai18n="key_section_product_1",this.descriptionProducto='\n                    <li class="i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_1">Junta de Cabeza en Multilámina o Grafito con materiales premium en su recubrimientos epóxico termo estable y resistente a la temperatura que ayuda al anclaje de su segundo recubrimientos de silicón para lograr un sellado eficiente.</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_3">Mayor ADAPATACIÓN a SUPERFICIES, con su menor densidad permite un SELLADO ÓPTIMO</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_2">Multilamina con acero de alta resistencia al igual que sus recubrimientos tales como: Viton®, NBR y Silicón.</li>                    \n                    <p class="mt-3 i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_4">DESCUBRE NUEVA TECNOLOGÍA DCGraf <button type=\'button\' class=\'btn btn-primary\' id="btnModalNewTech">AQUÍ</button></p>\n                ';break;case"Empaques":this.datai18n="key_section_product_2",this.descriptionProducto='\n                    <li class="i18nelement" data-i18n="key_section_product_modal_empaques_descriptiton_1">Múltiples, aros y juntas planas de escape fabricados en grafito expandido que resiste elevadas temperaturas con excelente compresibilidad para absorber imperfecciones en las superficies a sellar.</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_empaques_descriptiton_2">Juntas y Sellos de Hule con materias primas de alto desempeño para uso automotriz como son el vitón, silicón, poli acrilato y nitrilo, entre otros.</li>\n                ';break;case"Pistones":this.datai18n="key_section_product_3",this.descriptionProducto='                \n                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_1">Acabados con Diamante y maquinados en equipo de control numérico (CNC) que brindan mayor precisión.</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_2">Corazón Monolítico que brinda mayor resistencia por su diseño fundido en una sola pieza.</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_3">Faldas Grafitadas para mejorar el rendimiento del pistón.</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_4">Fabricado bajo especificaciones de Equipo Original.</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_5">Vanguardia en Tecnología y Diseño</li>\n                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_6">Fundiciones Ligeras</li>\n                '}}render(){return`            \n            <div class="modal fade" id="${this.modalId}" tabindex="-1" aria-labelledby="${this.modalId}Label" aria-hidden="true">\n                <div class="modal-dialog modal-xl modal-dialog-centered">\n                    <div class="modal-content">\n                        <div class="modal-header">\n                            <h5 class="modal-title text-center i18nelement" data-i18n="key_section_product_modal_title" id="${this.modalId}Label"><i class="fa-solid fa-file-lines"></i> Detalle de producto</h5>\n                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                        </div>\n                        <div class="modal-body">\n                        \n                           <div class="card">\n                                <div class="row">\n                                    <div class="col-md-6" style="align-self: center;">\n                                        <img id="main-image" src="${this.productImage}" width="100%">\n                                    </div>\n                                    <div class="col-md-6">\n                                        <div class="product p-4">                                            \n                                            <div class="mt-4 mb-3">                                                 \n                                                <h5 class="text-uppercase i18nelement" data-i18n="${this.datai18n}">${this.productType}</h5>\n                                                <div class="price d-flex flex-row align-items-center"> \n                                                    <span class="act-price i18nelement" data-i18n="key_section_product_features"></span>                                                    \n                                                </div>\n                                            </div>\n                                            <p class="about">\n                                                <ul>\n                                                    ${this.descriptionProducto}\n                                                </ul>\n                                                ${this.nuevaTecnologia}\n                                            </p>\n                                            \n                                            <div class="cart mt-4 align-items-center"> \n                                                <button class="btn btn-danger text-uppercase mr-2 px-4 i18nelement" data-i18n="key_section_product_modal_download_pdf"><i class="fa-solid fa-download"></i> Descargar catálogo en PDF</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        \n                        </div>                 \n                    </div>\n                </div>\n            </div>                                          \n        `}}class r{render(){return'\n            \x3c!-- FOOTER --\x3e\n            <div class="modal fade" id="modalNewTechnology" tabindex="-1" aria-labelledby="modalNewTechnologyLabel" aria-hidden="true">\n                <div class="modal-dialog modal modal-dialog-centered">\n                    <div class="modal-content">\n                        <div class="modal-header">\n                            <h5 class="modal-title text-center" id="modalNewTechnologyLabel"><i class="fas fa-video"></i> TECNOLOGÍA DCGraf</h5>\n                            <button type="button" class="btn-close" id="btnCloseModalNewTech"></button>\n                        </div>\n                        <div class="modal-body">\n                            <div class="row">\n                                <div class="col-md-12">\n                                    <div class="embed-responsive embed-responsive-16by9">\n                                        <video autoplay="autoplay" muted="" loop="loop" style="width: 100%;">\n                                            <source src="assets/VID_DC_GRAF_WEB.5442b797.mp4" type="video/mp4"/>\n                                        </video>\n                                    </div>\n                                </div>                                                          \n                            </div>                           \n                        </div>                 \n                    </div>\n                </div>\n            </div>\n        '}}var m="assets/icono_gasket.a4d2c3ce.png";class p{render(){return`\n           <section class="container" id="productos">\n                <div class="section_our_solution" style="padding-top:50px;padding-bottom:50px;">\n                    <div class="row">\n                        <div class="title text-center pb-5 pt-3">\n                            <h1 class="fw-bold display-4 i18nelement" data-i18n="key_products_title">¿Qué estas buscando?</h1>                            \n                            <div class="container-block container-flexbox bg-light mt-5">\n                                <div class="item-col-3">\n                                    <a id="btnCatalogoElectrinico" class="btn btn-lg btn-grad-red me-3 i18nelement" data-i18n="key_btn_catalogo" href="https://www.dcp.com.mx/varios/CatalogoElectronico.jsp" target="_blank" style="width:100%;">Catalogo electrónico</a>\n                                </div>\n\n                                <div class="item-col-3">\n                                    <a id="btnInformacionTecnica" class="btn btn-lg btn-grad-gray me-3 i18nelement" data-i18n="key_btn_informacion_tecnica" href="/informaciontecnica.html" style="width:100%;">Información técnica</a>\n                                </div>\n\n                                <div class="item-col-3">\n                                    <a id="btnNuevosProductos" class="btn btn-lg btn-grad-blue me-3 i18nelement" data-i18n="key_btn_nuevos_productos" href="https://www.dcp.com.mx/publica/Principal/esp/noticias.jsp" target="_blank" style="width:100%;">Nuevos productos</a>\n                                </div>\n                                \n                            </div>\n\n                        </div>\n\n                        <div class="col-lg-4 col-md-4 col-sm-4">\n                        <div class="our_solution_category mt-5">\n                            <div class="solution_cards_box">\n                            <div class="solution_card">\n                                <div class="hover_color_bubble"></div>\n                                <div class="so_top_icon">\n                                    <img src="${m}" alt="">                 \n                                </div>\n                                <div class="solu_title">\n                                <h3 class="i18nelement" data-i18n="key_section_product_1">Juntas</h3>\n                                </div>\n                                <div class="solu_description">\n                                    <p class="i18nelement" data-i18n="key_section_product_subtitle_1"></p>\n                                    <button id="btnViewDetailsJuntas" type="button" class="btn-grad-red i18nelement" data-i18n="key_section_product_btn_details">\n                                        Ver detalles\n                                    </button>\n                                </div>\n                            </div>\n                            </div>\n                        </div>\n                        </div>\n                        <div class="col-lg-4 col-md-4 col-sm-4">\n                        <div class="our_solution_category mt-5">\n                            <div class="solution_cards_box">\n                            <div class="solution_card">\n                                <div class="hover_color_bubble"></div>\n                                <div class="so_top_icon">\n                                    <img src="assets/icono_empaque.4fbe0513.png" alt="">\n                                </div>\n                                <div class="solu_title">\n                                <h3 class="i18nelement" data-i18n="key_section_product_2">Empaques</h3>\n                                </div>\n                                <div class="solu_description">\n                                    <p class="i18nelement" data-i18n="key_section_product_subtitle_2"></p>\n                                    <button id="btnViewDetailsEmpaques" type="button" class="btn-grad-red i18nelement" data-i18n="key_section_product_btn_details">\n                                        Ver detalles\n                                    </button>\n                                </div>\n                            </div>\n                            </div>\n                        </div>\n                        </div>\n                        <div class="col-lg-4 col-md-4 col-sm-4">\n                        <div class="our_solution_category mt-5">\n                            <div class="solution_cards_box">\n                            <div class="solution_card">\n                                <div class="hover_color_bubble"></div>\n                                <div class="so_top_icon">\n                                    <img src="assets/icono_piston.d94ef618.png" alt="">\n                                </div>\n                                <div class="solu_title">\n                                    <h3 class="i18nelement" data-i18n="key_section_product_3">Pistones</h3>\n                                </div>\n                                <div class="solu_description">\n                                    <p class="i18nelement" data-i18n="key_section_product_subtitle_3"></p>\n                                    <button id="btnViewDetailsPistones" ype="button" class="btn-grad-red i18nelement" data-i18n="key_section_product_btn_details">\n                                        Ver detalles\n                                    </button>\n                                </div>\n                            </div>\n                            </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        `}}class u{render(){return'\n          <section class="bg-feature">\n            <div class="container">\n                <div class="row align-items-center">\n                    <div class="col-lg-5">\n                        <div class="mb-4 mb-lg-0">\n                            <h1 class="feature-title display-6 fw-bold position-relative i18nelement" data-i18n="key_section_development_title">Desarrollos</h1>\n                            <p class="fs-5 lh-lg my-4 py-lg-3 i18nelement" data-i18n="key_section_development_description">DC Gaskets en su ingeniería y desarrollo de productos, crea juntas y empaques diseñados para satisfacer las demandas más exigentes de cada motor para conseguir su máximo desempeño.</p>\n                        </div>\n                    </div>                    \n                    <div class="col-lg-7">\n                        <div class="row justify-content-center">\n                            <div class="col-xl-5 col-md-6 mt-4">\n                                <div class="card text-white bg-gradient-info border-0 mt-md-5 bg-none">\n                                    <div class="card-body border-15">\n                                        <img src="assets/IMG_1.f017fbd1.jpg" alt="" width="100%" class="border-15 box-shadow-light" style="filter: brightness(1.2);">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="col-xl-5 col-md-6 mt-4">\n                                <div class="card text-white bg-gradient-purple border-0 bg-none">\n                                    <div class="card-body border-15">\n                                        <img src="assets/IMG_2.42d9ff69.jpg" alt="" width="100%" class="border-15 box-shadow-light">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="col-xl-5 col-md-6 mt-4">\n                                <div class="card text-white bg-gradient-warning border-0 bg-none">\n                                    <div class="card-body border-15">\n                                        <img src="assets/IMG_3.0fb65d5f.jpg" alt="" width="100%" class="border-15 box-shadow-light">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="col-xl-5 col-md-6 mt-4">\n                                <div class="card text-white bg-gradient-green border-0 mt-md-1 bg-none">\n                                    <div class="card-body">\n                                        <img src="assets/IMG_4.8290c3e3.jpg" alt="" width="100%" class="border-15 box-shadow-light" style="height: 297px;object-fit: cover;">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>'}}class v{render(){return'\n           <section class="p-0 mb-5 mt-5">\n                <div class="container">\n                    <div class="row">\n                    <div class="col-md-12">\n                        <div class="bg-dark rounded py-1 all-text-white">\n                            <h2 class="p-2 p-sm-5 text-center text-white i18nelement" data-i18n="key_section_banner">\n                                Lo hacemos posible bajo presión\n                            </h2>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </section>\n        '}}class g{render(){return'\n           <section class="hero-banner py-5">\n                <div class="container">\n                    <div class="row row align-items-center">\n                        <div class="col-md-7">\n                            <p class="fs-5 lh-lg my-4 py-lg-3 i18nelement" data-i18n="key_client_section_description">\n                                Tenemos la linea mas completa, 1 de cada 3 mecanicos prefieren DC\n                            </p>\n                        </div>\n                        <div class="col-md-5">                            \n                            <video class="border-15 box-shadow-light" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%">\n                                <source src="assets/VID-DRON-WA0005.aa1661a6.mp4" type="video/mp4"/>\n                            </video>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class="container pt-md-6 mt-5">\n                    <div class="row mb-4">\n                        <div class="col-12 text-center">\n                            <div class="lc-block">\n                                <div editable="rich">\n                                    <p class="text-uppercase fw-bold i18nelement" data-i18n="key_client_section_title_logos">Algunos de nuestros clientes</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="container pb-6">\n                    \x3c!-- Slider main container --\x3e\n                    <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">\n                        \x3c!-- Additional required wrapper --\x3e\n                        <div class="swiper-wrapper d-flex align-items-center text-center" style="cursor: grab; transform: translate3d(-222.667px, 0px, 0px); transition-duration: 0ms;" id="swiper-wrapper-787857f5a4314e39" aria-live="polite">\n                            \x3c!-- Slides--\x3e\n                            <div class="swiper-slide lc-block swiper-slide-prev" style="width: 125px; margin-right: 40px;" role="group" aria-label="1 / 14">\n                                <img class="img-fluid" src="assets/cliente1.f93bdd8f.png" loading="lazy" width="120">\n                            </div>\n                            <div class="swiper-slide lc-block swiper-slide-active" style="width: 125px; margin-right: 40px;" role="group" aria-label="2 / 14">\n                                <img class="img-fluid" src="assets/cliente2.71fe1232.png" loading="lazy" width="120">\n                            </div>\n                            <div class="swiper-slide lc-block swiper-slide-next" style="width: 125px; margin-right: 40px;" role="group" aria-label="3 / 14">\n                                <img class="img-fluid" src="assets/cliente3.003d66d3.png" loading="lazy" width="120">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="4 / 14">\n                                <img class="img-fluid" src="assets/cliente4.6d9268fa.png" loading="lazy" width="120">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="5 / 14">\n                                <img class="img-fluid" src="assets/cliente5.a0c3a468.png" loading="lazy" width="120">\n                            </div>                            \n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="6 / 14">\n                                <img class="img-fluid" src="assets/cliente6.143cd4f4.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="7 / 14">\n                                <img class="img-fluid" src="assets/cliente7.5057487d.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="8 / 14">\n                                <img class="img-fluid" src="assets/cliente8.3d6e529c.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="9 / 14">\n                                <img class="img-fluid" src="assets/cliente9.c5c9f8fd.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="10 / 14">\n                                <img class="img-fluid" src="assets/cliente10.5c8fd178.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="11 / 14">\n                                <img class="img-fluid" src="assets/cliente11.61d77dfc.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="12 / 14">\n                                <img class="img-fluid" src="assets/cliente12.84f2ae07.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="13 / 14">\n                                <img class="img-fluid" src="assets/cliente13.75807823.png" loading="lazy">\n                            </div>\n                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="14 / 14">\n                                <img class="img-fluid" src="assets/cliente14.92d4122b.png" loading="lazy" width="120">\n                            </div>\n\n                        </div>\n                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>\n                </div>\n\n\n\n            </section>\n            \n        '}}class b{render(){return'\n        <section class="container" id="noticias">\n           <div class="blog-home5 py-5">\n              <div class="container">\n                \x3c!-- Row  --\x3e\n                <div class="row justify-content-center">\n                  \x3c!-- Column --\x3e\n                  <div class="col-md-8 text-center">\n                    <h2 class="display-6 fw-bolder mb-3">Noticias</h2>\n                  </div>\n                  \x3c!-- Column --\x3e\n                </div>\n                \x3c!-- Row  --\x3e\n                <div class="row mt-4">\n                  \x3c!-- Column --\x3e\n                  <div class="col-md-4">\n                    <div class="card b-h-box position-relative font-14 mb-4 border-15">\n                      <img class="card-img border-15" src="http://via.placeholder.com/640x360" alt="Card image">\n                      <div class="card-img-overlay overflow-hidden border-15">\n                        <div class="d-flex align-items-center">\n                            <span class="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">DC GASKETS - MEDIUM</span>\n                            <div class="ml-2">\n                              <span class="ml-2">&nbsp;&nbsp;Feb 18, 2022</span>\n                            </div>\n                        </div>\n                        <h5 class="card-title my-3 font-weight-normal">Articulo #1 DC Gaskets.</h5>\n                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>\n                      </div>\n                    </div>\n                  </div>\n                  \x3c!-- Column --\x3e\n                  \x3c!-- Column --\x3e\n                  <div class="col-md-4">\n                    <div class="card b-h-box position-relative font-14 mb-4 border-15">\n                      <img class="card-img border-15" src="http://via.placeholder.com/640x360" alt="Card image">\n                      <div class="card-img-overlay overflow-hidden border-15">\n                        <div class="d-flex align-items-center">\n                            <span class="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">DC GASKETS - MEDIUM</span>\n                            <div class="ml-2">\n                              <span class="ml-2">&nbsp;&nbsp;Feb 18, 2022</span>\n                            </div>\n                        </div>\n                        <h5 class="card-title my-3 font-weight-normal">Articulo #2 DC Gaskets</h5>\n                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>\n                      </div>\n                    </div>\n                  </div>\n                  \x3c!-- Column --\x3e\n                  \x3c!-- Column --\x3e\n                  <div class="col-md-4">\n                    <div class="card b-h-box position-relative font-14 mb-4 border-15">\n                      <img class="card-img border-15" src="http://via.placeholder.com/640x360" alt="Card image">\n                      <div class="card-img-overlay overflow-hidden border-15">\n                        <div class="d-flex align-items-center">\n                            <span class="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">DC GASKETS - MEDIUM</span>\n                            <div class="ml-2">\n                              <span class="ml-2">&nbsp;&nbsp;Feb 18, 2022</span>\n                            </div>\n                        </div>\n                        <h5 class="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>\n                        <p class="card-text">Articulo #3 DC Gaskets</p>\n                      </div>\n                    </div>\n                  </div>\n                  \x3c!-- Column --\x3e\n                </div>\n              </div>\n            </div>\n          </section>\n        '}}class h{render(){return'           \n            <div class="container mt-5 mb-5" id="contacto">\n                <div class="row">\n                    <div class="col-md-6">\n                        <div class="lc-block mb-4">\n                            <div class="card" lc-helper="gmap-embed">\n                                <iframe class="border-15 box-shadow-light" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.915235278362!2d-101.60746716406248!3d21.073508577028612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46a349db7810b4a1!2sMANUFACTURAS%20DIVERSAS%20SA%20DE%20CV!5e0!3m2!1ses-419!2sus!4v1656374695145!5m2!1ses-419!2sus" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n                            </div>\n                        </div>\x3c!-- /lc-block --\x3e\n                    </div>\x3c!-- /col --\x3e\n                    <div class="col-md-6 px-5">\n                        <div class="lc-block mb-4">\n                            <div class="text-black">\n                                <h2 class="display-6 fw-bolder i18nelement" data-i18n="key_menu_contacto">Contacto<p></p>\n                                    <p></p>\n                                </h2>\n                            </div>\n                        </div>\n                        <div class="lc-block mb-4">\n                            <div class="text-black">\n                                <p class="lead">Blvd. Aeropuerto 1255<br>Predio Rancho Alegre, C.P. 37670<br>León, Gto. México</p>\n                                <p class="lead">MÉXICO<br>Tel. (477) 710 6000<br>Lada sin costo 01 (800) 710 5020</p>\n                                <p class="lead">Ventas México<br>Tel.  (477) 710 6007<br>ventas@dcp.com.mx</p>\n                                <p class="lead">UNITED STATES<br>Toll Free: 1 877 676 7704<br>Sales USA<br>Ph. (321) 221 0443<br>sales@dcp.com.mx</p>\n                                <p class="lead">SERVICIO TÉCNICO / TECH SUPPORT<br>T. +52 (477) 710 60 00  x.173<br>soportetecnico@dcp.com.mx</p>\n                            </div>\n                        </div>                       \n                    </div>\x3c!-- /col --\x3e\n                </div>\n            </div>\n        '}}class y{constructor(){this.nav=new e({dark:!1}),this.headerVideo=new n({title:"Innovación y tecnología de sellado para la industria automotriz.",subtitle:"",actionButtonText:"Learn More",show:!0}),this.sectionProducts=new p,this.sectionDevelopment=new u,this.sectionBanner=new v,this.sectionClients=new g,this.footer=new i({company:"DC Gaskets",year:(new Date).getFullYear()}),this.modalLogin=new s({title:"Iniciar sesión",btnCancelButtonText:"Cancelar",btnLoginText:"Iniciar sesión"}),this.modalCompany=new o,this.modalProductJuntas=new c({modalId:"modalJuntas",productType:"Juntas",productImage:m,productDetails:""}),this.modalProductEmpaques=new c({modalId:"modalEmpaques",productType:"Empaques",productImage:"assets/icono_empaque.4fbe0513.png",productDetails:""}),this.modalProductPistones=new c({modalId:"modalPistones",productType:"Pistones",productImage:"assets/icono_piston.d94ef618.png",productDetails:""}),this.ModalNewTechnology=new r,this.socialWidget=new a({linkedin:"https://mx.linkedin.com/company/dc-gaskets",instagram:"https://www.instagram.com/dcgaskets/?hl=es-la",facebook:"https://es-la.facebook.com/DCGaskets/",wsphone:"524777106000",wsmessage:"Mensaje default para sporte de DC Gaskets"}),this.sectionNews=new b,this.sectionContact=new h}render(){return`\n        <div id="content">\n            ${this.nav.render()}\n            ${this.headerVideo.render()}\n            ${this.sectionProducts.render()}\n            ${this.sectionDevelopment.render()}\n            ${this.sectionBanner.render()}\n            ${this.sectionClients.render()}\n            ${this.sectionNews.render()}\n            ${this.sectionContact.render()}\n            ${this.footer.render()}\n\n            \x3c!-- Modal declarations --\x3e\n            ${this.modalLogin.render()}\n            ${this.modalCompany.render()}\n            ${this.modalProductJuntas.render()}\n            ${this.modalProductEmpaques.render()}\n            ${this.modalProductPistones.render()}\n            ${this.ModalNewTechnology.render()}\n\n            \x3c!-- Widget declaration --\x3e\n            ${this.socialWidget.render()}\n        </div>\n        `}}(e=>{let n=[];const i=(()=>{const i=async()=>{const i=["es","en"].reduce(((e,i,s)=>(e[i]={translation:n[s]},e)),{});await i18next.init({lng:"es",debug:!1,resources:i}),s(),i18next.on("languageChanged",(()=>{s()})),e(".langSelector").on("change",(function(n){switch(i18next.changeLanguage(n.target.value),n.target.value){case"es":e(".nice-select>.current").prepend(""),e(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');break;case"en":e(".nice-select>.current").prepend(""),e(".nice-select>.current").prepend('<i class="flag-icon flag-icon-us"></i> ');break;default:e(".nice-select>.current").prepend(""),e(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ')}}))},s=()=>{const e=document.getElementsByClassName("i18nelement");for(let n=0;n<e.length;n++){const i=e[n],s=i.getAttribute("data-i18n");i.innerHTML=i18next.t(s)}},a=()=>{e(".langSelector").niceSelect(),e(".nice-select>ul.list>li.option[data-value='en']").prepend('<i class="flag-icon flag-icon-us"></i> '),e(".nice-select>ul.list>li.option[data-value='es']").prepend('<i class="flag-icon flag-icon-mx"></i> '),e(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ')};return{init:()=>{const s=new d,o=new y;try{n.push(t),n.push(l),document.body.insertAdjacentHTML("afterbegin",s.render()),document.querySelector("body").classList.add("stop-scrolling"),document.getElementById("app").insertAdjacentHTML("afterbegin",o.render());let d=document.querySelector("nav");window.addEventListener("scroll",(function(){window.pageYOffset>100?d.classList.add("bg-dark-transparent","shadow"):d.classList.remove("bg-dark-transparent","shadow")}));new Swiper(".swiper",{slidesPerView:2,spaceBetween:10,grabCursor:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:6,spaceBetween:40}},autoplay:{delay:3e3}});document.getElementById("btnViewDetailsJuntas").addEventListener("click",(function(){e("#modalJuntas").modal("show")})),document.getElementById("btnViewDetailsEmpaques").addEventListener("click",(function(){e("#modalEmpaques").modal("show")})),document.getElementById("btnViewDetailsPistones").addEventListener("click",(function(){e("#modalPistones").modal("show")})),document.getElementById("mobileMenuInicio").addEventListener("click",(function(){document.getElementById("menuToggle").checked&&(document.getElementById("menuToggle").checked=!1)})),document.getElementById("mobileMenuEmpresa").addEventListener("click",(function(){document.getElementById("menuToggle").checked&&(document.getElementById("menuToggle").checked=!1)})),document.getElementById("mobileMenuProductos").addEventListener("click",(function(){document.getElementById("menuToggle").checked&&(document.getElementById("menuToggle").checked=!1)})),document.getElementById("mobileMenuNoticias").addEventListener("click",(function(){document.getElementById("menuToggle").checked&&(document.getElementById("menuToggle").checked=!1)})),document.getElementById("mobileMenuContact").addEventListener("click",(function(){document.getElementById("menuToggle").checked&&(document.getElementById("menuToggle").checked=!1)})),setTimeout((()=>{let e=new bootstrap.Modal(document.getElementById("modalNewTechnology"),{});document.getElementById("btnModalNewTech").addEventListener("click",(function(){e.show()})),document.getElementById("btnCloseModalNewTech").addEventListener("click",(function(){e.hide()}))}),3e3)}catch(c){console.error(c)}finally{setTimeout((()=>{s.dissmiss(),document.querySelector("body").classList.remove("stop-scrolling")}),3e3),a(),i()}}}})();e(document).ready((function(){i.init()}))})(jQuery);
