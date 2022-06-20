import imgJuntas from '../assets/images/juntas.jpg';
import imgEmpaques from '../assets/images/empaques.jpg';
import imgPistones from '../assets/images/pistones.jpg';

export default class SectionProducts {
    render() {
        return /*html*/ `
           <section class="container">
                <div class="section_our_solution" style="padding-top:50px;padding-bottom:50px;">
                    <div class="row">
                        <div class="title text-center pb-5 pt-3">
                            <h2 class="fw-bold">Productos que ofrecemos</h2>
                            <p class="mb-0">
                                Aqui va una breve descripción de los productos que se ofrecen.
                            </p>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src="${imgJuntas}" alt="">                 
                                </div>
                                <div class="solu_title">
                                <h3>Juntas</h3>
                                </div>
                                <div class="solu_description">
                                <p>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout.
                                </p>
                                <button type="button" class="read_more_btn" data-bs-toggle="modal" data-bs-target="#productoModal">
                                    Ver detalles
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src="${imgEmpaques}" alt="">
                                </div>
                                <div class="solu_title">
                                <h3>Empaques</h3>
                                </div>
                                <div class="solu_description">
                                <p>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout.
                                </p>
                                <button type="button" class="read_more_btn">
                                    Ver detalles
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src="${imgPistones}" alt="">
                                </div>
                                <div class="solu_title">
                                <h3>Pistones</h3>
                                </div>
                                <div class="solu_description">
                                <p>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout.
                                </p>
                                <button type="button" class="read_more_btn">
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