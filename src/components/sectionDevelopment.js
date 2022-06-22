import img1 from '../assets/images/01.jpg';
import img2 from '../assets/images/02.jpg';
import img3 from '../assets/images/03.jpg';
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
                            <p class="text-muted fs-5 lh-lg my-4 py-lg-3 i18nelement" data-i18n="key_section_development_description">DC Gaskets en su ingeniería y desarrollo de productos, crea juntas y empaques diseñados para satisfacer las demandas más exigentes de cada motor para conseguir su máximo desempeño.</p>
                            <!-- <p class="text-muted lh-lg mb-0">Aliquam erat volutpat. Aliquam diam nunc, pretium in sed
                                pharetra at libero. Aenean quis fringilla erat rhoncus arcu. Nunc risus risus, porttitor sed
                                urna amet.</p> -->
                        </div>
                    </div>
                    <!--end col-->

                    


                    <div class="col-lg-7">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-info border-0 mt-md-5">
                                    <div class="card-body border-15">
                                        <!-- <i class="uil uil-channel-add" style="font-size:46px"></i>
                                        <h5 class="mt-3">User Friendly</h5>
                                        <p class="mt-3 mb-0">Cras fringilla in turpis sit amet rhoncus pharetra.</p> -->
                                        <img src="${img4}" alt="" width="100%">
                                    </div>
                                    <!--end card-body-->
                                </div>
                                <!--end card-->
                            </div>
                            <!--end col-->

                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-purple border-0">
                                    <div class="card-body border-15">
                                        <!-- <i class="uil uil-create-dashboard" style="font-size: 46px;"></i>
                                        <h5 class="mt-3">Minimal Interface</h5>
                                        <p class="mt-3 mb-0">Cras fringilla in turpis sit amet rhoncus pharetra.</p> -->
                                        <img src="${img3}" alt="" width="100%">
                                    </div>
                                    <!--end card-body-->
                                </div>
                                <!--end card-->
                            </div>
                            <!--end col-->

                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-warning border-0">
                                    <div class="card-body border-15">
                                        <!-- <i class="uil uil-envelope-alt" style="font-size: 46px"></i>
                                        <h5 class="mt-3">Fast Messaging</h5>
                                        <p class="mt-3 mb-0">Cras fringilla in turpis sit amet rhoncus pharetra.</p> -->
                                        <img src="${img2}" alt="" width="100%">
                                    </div>
                                    <!--end card-body-->
                                </div>
                                <!--end card-->
                            </div>
                            <!--end col-->

                            <div class="col-xl-5 col-md-6 mt-4">
                                <div class="card text-white bg-gradient-green border-0">
                                    <div class="card-body border-15">
                                        <img src="${img1}" alt="" width="100%">
                                        <!-- <i class="uil uil-unlock-alt" style="font-size: 46px;"></i>
                                        <h5 class="mt-3">Secure Monitoring</h5>
                                       <p class="mt-3 mb-0">Cras fringilla in turpis sit amet rhoncus pharetra.</p> -->
                                    </div>
                                    <!--end card-body-->
                                </div>
                                <!--end card-->
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        `;
    }

}