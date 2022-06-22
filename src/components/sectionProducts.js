import imgJuntas from '../assets/images/juntas.jpg';
import imgEmpaques from '../assets/images/empaques.jpg';
import imgPistones from '../assets/images/pistones.jpg';

export default class SectionProducts {
    render() {
        return /*html*/ `
           <section class="container" id="productos">
                <div class="section_our_solution" style="padding-top:50px;padding-bottom:50px;">
                    <div class="row">
                        <div class="title text-center pb-5 pt-3">
                            <h1 class="fw-bold display-4 i18nelement" data-i18n="key_products_title" style="padding-top: 50px;">¿Qué estas buscando?</h1>
                            <div class="container mt-5" id="buttonsContainer">
                                <a id="btnCatalogoElectrinico" class="btn btn-grad-red me-3 i18nelement" data-i18n="key_btn_catalogo" href="#">Catalogo electrónico</a>
                                <a id="btnInformacionTecnica" class="btn btn-grad-gray me-3 i18nelement" data-i18n="key_btn_informacion_tecnica" href="#">Información técnica</a>
                                <a id="btnNuevosProductos" class="btn btn-grad-blue me-3 i18nelement" data-i18n="key_btn_nuevos_productos" href="#">Nuevos productos</a>
                            </div>
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