import imgEventoChihuahua from '../../assets/images/noticias/dc_pistons_capacita.webp';
import imgEventoLasVegas from '../../assets/images/noticias/cd_pistons_las_vegas.jpeg';
import imgEventoRujacGuadalajara from '../../assets/images/noticias/dc_expo_rujac_guadalajara.jpeg';

export default class SectionNews {
    render() {
        return /*html*/ `
        <section class="container" id="noticias">
           <div class="blog-home5 py-5">
              <div class="container">
                <!-- Row  -->
                <div class="row justify-content-center">
                  <!-- Column -->
                  <div class="col-md-8 text-center">
                    <h2 class="display-6 fw-bolder mb-3 i18nelement" data-i18n="key_noticias_menu">Noticias</h2>
                  </div>
                  <!-- Column -->
                </div>
                <!-- Row  -->
                <div class="row mt-4">
                  <!-- Column -->
                  <div class="col-md-4">
                  
                  
                  <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                      <img class="card-img border-15 img-technical-info" src="${imgEventoChihuahua}" alt="Card image">
                      <div class="card-img-overlay overflow-hidden border-15">
                      <span class="text-white font-weight-normal">Sep 8, 2022</span>
                      <h3 class="fw-bold">EVENTO CHAVITAR <br/> Chihuahua, Chih.</h3>                  
                      <div class="d-flex align-items-center">
                          <a href="https://kty.li/9R8ef" target="_blank" class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal i18nelement" data-i18n="key_news_section_btn_verevento">Ver evento</a>
                      </div>
                      <!--<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>-->
                      </div>
                  </div>


                  </div>
                  <!-- Column -->
                  <!-- Column -->
                  <div class="col-md-4">
                    <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                      <img class="card-img border-15 img-technical-info" src="${imgEventoLasVegas}" alt="Card image">
                      <div class="card-img-overlay overflow-hidden border-15">
                      <span class="text-white font-weight-normal">Nov 1 - 3, 2022</span>
                      <h3 class="fw-bold">AAPEX 2022 <br/>Las Vegas, NV USA</h3>                                           
                      <div class="d-flex align-items-center">
                          <a href="https://kty.li/Rk3Ss" target="_blank" class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal i18nelement" data-i18n="key_news_section_btn_verevento">Ver evento</a>
                      </div>
                      <!--<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>-->
                      </div>
                    </div>
                  </div>
                  <!-- Column -->
                  <!-- Column -->
                  <div class="col-md-4">
                    <div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                      <img class="card-img border-15 img-technical-info" src="${imgEventoRujacGuadalajara}" alt="Card image">
                      <div class="card-img-overlay overflow-hidden border-15">
                      <span class="text-white font-weight-normal">Ago 31 - Sep 2, 2022</span>
                      <h3 class="fw-bold">EXPO INTERNACIONAL RUJAJ 2022 <br/> Guadalajara, Jal.</h3>                                           
                      <div class="d-flex align-items-center">
                          <a href="https://kty.li/8fYxN" target="_blank" class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal i18nelement" data-i18n="key_news_section_btn_verevento">Ver evento</a>
                      </div>
                      <!--<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>-->
                      </div>
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