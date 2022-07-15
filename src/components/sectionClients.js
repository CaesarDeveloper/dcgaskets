import img2 from '../assets/images/02.jpg';
import VIDEO_DRON from '../assets/video/VID-DRON-WA0005.mp4';
import cliente1 from '../assets/images/cliente1.png';
import cliente2 from '../assets/images/cliente2.png';
import cliente3 from '../assets/images/cliente3.png';
import cliente4 from '../assets/images/cliente4.png';
import cliente5 from '../assets/images/cliente5.png';
import cliente6 from '../assets/images/cliente6.png';
import cliente7 from '../assets/images/cliente7.png';
import cliente8 from '../assets/images/cliente8.png';
import cliente9 from '../assets/images/cliente9.png';
import cliente10 from '../assets/images/cliente10.png';
import cliente11 from '../assets/images/cliente11.png';
import cliente12 from '../assets/images/cliente12.png';
import cliente13 from '../assets/images/cliente13.png';
import cliente14 from '../assets/images/cliente14.png';


export default class SectionClients {
    render() {
        return /*html*/ `
           <section class="hero-banner py-5">
                <div class="container">
                    <div class="row row align-items-center">
                        <div class="col-md-7">
                            <h3 class="text-black my-5 i18nelement" data-i18n="key_client_section_description">
                                Tenemos la linea mas completa, 1 de cada 3 mecanicos prefieren DC
                            </h3>
                        </div>
                        <div class="col-md-5">                            
                            <video class="border-15 box-shadow-light" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%">
                                <source src="${VIDEO_DRON}" type="video/mp4"/>
                            </video>
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
                            <div class="swiper-slide lc-block swiper-slide-prev" style="width: 125px; margin-right: 40px;" role="group" aria-label="1 / 14">
                                <img class="img-fluid" src="${cliente1}" loading="lazy" width="120">
                            </div>
                            <div class="swiper-slide lc-block swiper-slide-active" style="width: 125px; margin-right: 40px;" role="group" aria-label="2 / 14">
                                <img class="img-fluid" src="${cliente2}" loading="lazy" width="120">
                            </div>
                            <div class="swiper-slide lc-block swiper-slide-next" style="width: 125px; margin-right: 40px;" role="group" aria-label="3 / 14">
                                <img class="img-fluid" src="${cliente3}" loading="lazy" width="120">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="4 / 14">
                                <img class="img-fluid" src="${cliente4}" loading="lazy" width="120">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="5 / 14">
                                <img class="img-fluid" src="${cliente5}" loading="lazy" width="120">
                            </div>                            
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="6 / 14">
                                <img class="img-fluid" src="${cliente6}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="7 / 14">
                                <img class="img-fluid" src="${cliente7}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="8 / 14">
                                <img class="img-fluid" src="${cliente8}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="9 / 14">
                                <img class="img-fluid" src="${cliente9}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="10 / 14">
                                <img class="img-fluid" src="${cliente10}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="11 / 14">
                                <img class="img-fluid" src="${cliente11}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="12 / 14">
                                <img class="img-fluid" src="${cliente12}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="13 / 14">
                                <img class="img-fluid" src="${cliente13}" loading="lazy">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="14 / 14">
                                <img class="img-fluid" src="${cliente14}" loading="lazy" width="120">
                            </div>

                        </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>



            </section>
            
        `;
    }

}