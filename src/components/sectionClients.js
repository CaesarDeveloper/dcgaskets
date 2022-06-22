import img2 from '../assets/images/02.jpg';

export default class SectionClients {
    render() {
        return /*html*/ `
           <section class="hero-banner py-5">
                <div class="container">
                    <div class="row row align-items-center">
                        <div class="col-md-6">
                            <h1 class="mt-3 fw-bold">Clientes</h1>
                            <p class="lead text-black my-5">
                                Tenemos la linea mas completa, 1 de cada 3 mecanicos prefieren DC
                            </p>
                            <!-- <a href="#" class="btn btn-outline-secondary btn-lg border">Order Now</a> -->

                            <div class="row mt-5">
                                <div class="col-lg-6">
                                    <div class="counter-box">
                                        <h2 class="display_1 counter_value text-grad" data-target="5000"></h2>
                                        <p class="text-muted mt-3">Productos</p>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="counter-box">
                                        <h2 class="display_1 counter_value text-grad" data-target="750000"></h2>
                                        <p class="text-muted mt-3">Clientes</p>
                                    </div>
                                </div>
                            
                                                
                            </div>
                            <!-- end row -->

                        </div>
                        <div class="col-md-6">
                            <img class="rounded aos aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" src="${img2}" alt="" width="100%">  
                        </div>                        
                    </div>
                </div>
            </section>
        `;
    }

}