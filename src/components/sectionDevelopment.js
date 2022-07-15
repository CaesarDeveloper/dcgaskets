import img1 from '../assets/images/IMG_1.jpg';
import img2 from '../assets/images/IMG_2.jpg';
import img3 from '../assets/images/IMG_3.jpg';
import img4 from '../assets/images/04.jpg';

export default class SectionDevelopment {
    render() {
        return /*html*/ `
          <section class="bg-feature">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="mb-4 mb-lg-0">
                            <h1 class="feature-title display-6 fw-bold position-relative i18nelement" data-i18n="key_section_development_title">Desarrollos</h1>
                            <p class="fs-5 lh-lg my-4 py-lg-3 i18nelement" data-i18n="key_section_development_description">DC Gaskets en su ingeniería y desarrollo de productos, crea juntas y empaques diseñados para satisfacer las demandas más exigentes de cada motor para conseguir su máximo desempeño.</p>
                        </div>
                    </div>                    
                    <div class="col-lg-7">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-info border-0 mt-md-5 bg-none">
                                    <div class="card-body border-15">
                                        <img src="${img1}" alt="" width="100%" class="border-15 box-shadow-light" style="filter: brightness(1.2);">
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-purple border-0 bg-none">
                                    <div class="card-body border-15">
                                        <img src="${img2}" alt="" width="100%" class="border-15 box-shadow-light" style="filter: brightness(1.4);">
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-warning border-0 bg-none">
                                    <div class="card-body border-15">
                                        <img src="${img3}" alt="" width="100%" class="border-15 box-shadow-light" style="filter: brightness(1.3);">
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-green border-0 mt-md-1 bg-none">
                                    <div class="card-body">
                                        <img src="${img4}" alt="" width="100%" class="border-15 box-shadow-light">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
}