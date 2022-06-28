export default class SectionContact {
    render() {
        return /*html*/ `           
            <div class="container mt-5 mb-5" id="contactSection">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="lc-block mb-4">
                            <div class="ratio ratio-4x3 min-vh-50" lc-helper="gmap-embed">
                                <iframe class="border-15 box-shadow-light" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.915235278362!2d-101.60746716406248!3d21.073508577028612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46a349db7810b4a1!2sMANUFACTURAS%20DIVERSAS%20SA%20DE%20CV!5e0!3m2!1ses-419!2sus!4v1656374695145!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div><!-- /lc-block -->
                    </div><!-- /col -->
                    <div class="col-md-6 px-5">
                        <div class="lc-block mb-4">
                            <div editable="rich">
                                <h2 class="display-6 fw-bolder i18nelement" data-i18n="key_menu_contacto">Contacto<p></p>
                                    <p></p>
                                </h2>
                            </div>
                        </div>
                        <div class="lc-block mb-4">
                            <div editable="rich">
                                <p class="lead">Blvd. Aeropuerto 1255, Fraccionamiento el Dorado, Predio Rancho Alegre, 37670 León, Gto.</p>
                                <p class="lead">+52 477 710 6000 </p>
                                <p class="lead">soporte@dcp.com.mx / soportetecnico@dcp.com.mx</p>

                            </div>
                        </div>                       
                    </div><!-- /col -->
                </div>
            </div>
        `;
    }

}