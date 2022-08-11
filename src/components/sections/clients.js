import VIDEO_DRON from '../../assets/video/VID-DRON-WA0005.mp4';
import cliente1 from '../../assets/images/cliente1.webp';
import cliente2 from '../../assets/images/cliente2.webp';
import cliente3 from '../../assets/images/cliente3.webp';
import cliente4 from '../../assets/images/cliente4.webp';
import cliente5 from '../../assets/images/cliente5.webp';
import cliente6 from '../../assets/images/cliente6.webp';
import cliente7 from '../../assets/images/cliente7.webp';
import cliente8 from '../../assets/images/cliente8.webp';
import cliente9 from '../../assets/images/cliente9.webp';
import cliente10 from '../../assets/images/cliente10.webp';
import cliente11 from '../../assets/images/cliente11.webp';
import cliente12 from '../../assets/images/cliente12.webp';
import cliente13 from '../../assets/images/cliente13.webp';
import cliente14 from '../../assets/images/cliente14.webp';


export default class SectionClients {
    render() {
        return /*html*/ `
           <section class="hero-banner py-5">
                <div class="container">
                    <div class="row row align-items-center">
                        <div class="col-md-7">
                            <p class="fs-5 lh-lg my-4 py-lg-3 i18nelement" data-i18n="key_client_section_description">
                                Tenemos la linea mas completa, 1 de cada 3 mecanicos prefieren DC
                            </p>
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
                                <img class="img-fluid" src="${cliente1}" loading="lazy" width="120" alt="clienteLogo1">
                            </div>
                            <div class="swiper-slide lc-block swiper-slide-active" style="width: 125px; margin-right: 40px;" role="group" aria-label="2 / 14">
                                <img class="img-fluid" src="${cliente2}" loading="lazy" width="120" alt="clienteLogo2">
                            </div>
                            <div class="swiper-slide lc-block swiper-slide-next" style="width: 125px; margin-right: 40px;" role="group" aria-label="3 / 14">
                                <img class="img-fluid" src="${cliente3}" loading="lazy" width="120" alt="clienteLogo3">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="4 / 14">
                                <img class="img-fluid" src="${cliente4}" loading="lazy" width="120" alt="clienteLogo4">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="5 / 14">
                                <img class="img-fluid" src="${cliente5}" loading="lazy" width="120" alt="clienteLogo5">
                            </div>                            
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="6 / 14">
                                <img class="img-fluid" src="${cliente6}" loading="lazy" alt="clienteLogo6">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="7 / 14">
                                <img class="img-fluid" src="${cliente7}" loading="lazy" alt="clienteLogo7">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="8 / 14">
                                <img class="img-fluid" src="${cliente8}" loading="lazy" alt="clienteLogo8">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="9 / 14">
                                <img class="img-fluid" src="${cliente9}" loading="lazy" alt="clienteLogo9">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="10 / 14">
                                <img class="img-fluid" src="${cliente10}" loading="lazy" alt="clienteLogo10">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="11 / 14">
                                <img class="img-fluid" src="${cliente11}" loading="lazy" alt="clienteLogo11">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="12 / 14">
                                <img class="img-fluid" src="${cliente12}" loading="lazy" alt="clienteLogo12">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="13 / 14">
                                <img class="img-fluid" src="${cliente13}" loading="lazy" alt="clienteLogo13">
                            </div>
                            <div class="swiper-slide lc-block" style="width: 125px; margin-right: 40px;" role="group" aria-label="14 / 14">
                                <img class="img-fluid" src="${cliente14}" loading="lazy" width="120" alt="clienteLogo14">
                            </div>

                        </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>



            </section>
            
        `;
    }

}