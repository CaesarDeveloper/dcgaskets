import img2 from '../assets/images/02.jpg';
import cliente1 from '../assets/images/cliente1.jpg';
import cliente2 from '../assets/images/cliente2.png';
import cliente3 from '../assets/images/cliente3.png';
import cliente4 from '../assets/images/cliente4.jpeg';
import cliente5 from '../assets/images/cliente5.png';
import cliente6 from '../assets/images/cliente6.jpg';
import cliente7 from '../assets/images/cliente7.jpg';
import cliente8 from '../assets/images/cliente8.png';
import cliente9 from '../assets/images/cliente9.png';


export default class SectionClients {
    render() {
        return /*html*/ `
           <section class="hero-banner py-5">
                <div class="container">
                    <div class="row row align-items-center">
                        <div class="col-md-7">
                            <h1 class="mt-3 fw-bold i18nelement" data-i18n="key_client_section_title">Clientes</h1>
                            <p class="lead text-black my-5 i18nelement" data-i18n="key_client_section_description">
                                Tenemos la linea mas completa, 1 de cada 3 mecanicos prefieren DC
                            </p>
                        </div>
                        <div class="col-md-5">
                            <img src="${img2}" class="border-15 box-shadow-light" alt="client" width="100%">
                        </div>
                    </div>
                </div>


                <div class="container pt-md-6 mt-5">
                    <div class="row mb-4">
                        <div class="col-12 text-center">
                            <div class="lc-block">
                                <div editable="rich">
                                    <p class="text-uppercase fw-bold i18nelement" data-i18n="key_client_section_title_logos">Algunos de nuestros clientes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container pb-6">
                    <!-- Slider main container -->
                    <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper d-flex align-items-center text-center" style="cursor: grab; transform: translate3d(-222.667px, 0px, 0px); transition-duration: 0ms;" id="swiper-wrapper-787857f5a4314e39" aria-live="polite">
                            <!-- Slides-->
                            <div class="swiper-slide lc-block swiper-slide-prev" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="1 / 8">
                                <img class="img-fluid" src="${cliente1}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block swiper-slide-active" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="2 / 8">
                                <img class="img-fluid" src="${cliente2}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block swiper-slide-next" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="3 / 8">
                                <img class="img-fluid" src="${cliente3}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="4 / 8">
                                <img class="img-fluid" src="${cliente4}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="5 / 8">
                                <img class="img-fluid" src="${cliente5}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="6 / 8">
                                <img class="img-fluid" src="${cliente6}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="7 / 8">
                                <img class="img-fluid" src="${cliente7}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 182.667px; margin-right: 40px;" role="group" aria-label="8 / 8">
                                <img class="img-fluid" src="${cliente8}" loading="lazy">
                            </div>
                        </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>



            </section>
            
        `;
    }

}