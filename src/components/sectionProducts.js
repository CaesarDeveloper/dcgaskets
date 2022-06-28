import imgJuntas from '../assets/images/icono_gasket.png';
import imgEmpaques from '../assets/images/icono_empaque.png';
import imgPistones from '../assets/images/icono_piston.png';

export default class SectionProducts {
    render() {
        return /*html*/ `
           <section class="container" id="productosSection">
                <div class="section_our_solution" style="padding-top:50px;padding-bottom:50px;">
                    <div class="row">
                        <div class="title text-center pb-5 pt-3">
                            <h1 class="fw-bold display-4 i18nelement" data-i18n="key_products_title" style="padding-top: 50px;">¿Qué estas buscando?</h1>                            
                            <div class="container-block container-flexbox bg-light mt-5">
                                <div class="item-col-3">
                                    <a id="btnCatalogoElectrinico" class="btn btn-lg btn-grad-red me-3 i18nelement" data-i18n="key_btn_catalogo" href="https://www.dcp.com.mx/varios/CatalogoElectronico.jsp" target="_blank" style="width:100%;">Catalogo electrónico</a>
                                </div>

                                <div class="item-col-3">
                                    <a id="btnInformacionTecnica" class="btn btn-lg btn-grad-gray me-3 i18nelement" data-i18n="key_btn_informacion_tecnica" href="https://www.dcp.com.mx/imgs/ProdNuevos/3.jpg" target="_blank" style="width:100%;">Información técnica</a>
                                </div>

                                <div class="item-col-3">
                                    <a id="btnNuevosProductos" class="btn btn-lg btn-grad-blue me-3 i18nelement" data-i18n="key_btn_nuevos_productos" href="https://www.dcp.com.mx/publica/Principal/esp/noticias.jsp" target="_blank" style="width:100%;">Nuevos productos</a>
                                </div>
                                
                            </div>

                            <img src="https://uploads-ssl.webflow.com/620ad2336e1661b45ed12787/620d43290b69933875a8d445_dots.svg" loading="lazy" alt="" class="dots-container">

                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="our_solution_category mt-5">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src="${imgJuntas}" alt="">                 
                                </div>
                                <div class="solu_title">
                                <h3 class="i18nelement" data-i18n="key_section_product_1">Juntas</h3>
                                </div>
                                <div class="solu_description">
                                <p>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout.
                                </p>
                                <button type="button" class="btn-grad-red i18nelement" data-i18n="key_section_product_btn_details" data-bs-toggle="modal" data-bs-target="#productoModal">
                                    Ver detalles
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="our_solution_category mt-5">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src="${imgEmpaques}" alt="">
                                </div>
                                <div class="solu_title">
                                <h3 class="i18nelement" data-i18n="key_section_product_2">Empaques</h3>
                                </div>
                                <div class="solu_description">
                                <p>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout.
                                </p>
                                <button type="button" class="btn-grad-red i18nelement" data-i18n="key_section_product_btn_details">
                                    Ver detalles
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="our_solution_category mt-5">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src="${imgPistones}" alt="">
                                </div>
                                <div class="solu_title">
                                <h3 class="i18nelement" data-i18n="key_section_product_3">Pistones</h3>
                                </div>
                                <div class="solu_description">
                                <p>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout.
                                </p>
                                <button type="button" class="btn-grad-red i18nelement" data-i18n="key_section_product_btn_details">
                                    Ver detalles
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

}