import IMG_EMPRESA_CONTACT from "../../assets/images/empresacontacto.webp";
export default class SectionContact {
    render() {
        return /*html*/ `           
            <!--<div class="container mt-5 mb-5" id="contacto">
                <div class="row">
                    <div class="col-md-6">
                        <div class="lc-block mb-4">
                            <div class="card" lc-helper="gmap-embed">
                                <iframe class="border-15 box-shadow-light" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.915235278362!2d-101.60746716406248!3d21.073508577028612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46a349db7810b4a1!2sMANUFACTURAS%20DIVERSAS%20SA%20DE%20CV!5e0!3m2!1ses-419!2sus!4v1656374695145!5m2!1ses-419!2sus" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 px-5">
                        <div class="lc-block mb-4">
                            <div class="text-black">
                                <h2 class="display-6 fw-bolder i18nelement" data-i18n="key_menu_contacto">Contacto<p></p>
                                    <p></p>
                                </h2>
                            </div>
                        </div>
                        <div class="lc-block mb-4">
                            <div class="text-black">
                                <p class="lead">Blvd. Aeropuerto 1255<br>Predio Rancho Alegre, C.P. 37670<br>León, Gto. México</p>
                                <p class="lead">MÉXICO<br>Tel. (477) 710 6000<br>Lada sin costo 01 (800) 710 5020</p>
                                <p class="lead">Ventas México<br>Tel.  (477) 710 6007<br>ventas@dcp.com.mx</p>
                                <p class="lead">UNITED STATES<br>Toll Free: 1 877 676 7704<br>Sales USA<br>Ph. (321) 221 0443<br>sales@dcp.com.mx</p>
                                <p class="lead">SERVICIO TÉCNICO / TECH SUPPORT<br>T. +52 (477) 710 60 00  x.173<br>soportetecnico@dcp.com.mx</p>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>-->

            <div class="container mt-5 mb-5" id="contacto">

                <div class="container">
                    <h2 class="display-6 fw-bolder centered i18nelement" data-i18n="key_menu_contacto" style="">Contacto</h2>
                    <img class="rounded box-shadow-light mb-4" src="${IMG_EMPRESA_CONTACT}" width="100%" style="
                        position: relative;
                        height: 170px;
                        filter: brightness(53%);" alt="imagenEmpresa">
                    
                </div>                

                
                <br/>
                <div class="row">
                    <div class="col-md-6">
                        <iframe class="border-15 box-shadow-light" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.915235278362!2d-101.60746716406248!3d21.073508577028612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46a349db7810b4a1!2sMANUFACTURAS%20DIVERSAS%20SA%20DE%20CV!5e0!3m2!1ses-419!2sus!4v1656374695145!5m2!1ses-419!2sus" width="100%" height="750" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <br />
                    <div class="col-md-6">
                        <h4 class="mb-3 i18nelement" data-i18n="key_contact_us">Contáctanos</h4>
                        <form class="my-form">
                            <div class="mb-3">
                                <label for="form-area" class="i18nelement" data-i18n="key_contact_area">Área</label>                                
                                <select class="form-select">
                                    <option value="1" selected>Ventas y atención al cliente</option>
                                    <option value="2">Soporte técnico</option>
                                    <option value="3">Compras & proveedores</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="form-name" class="i18nelement" data-i18n="key_contact_nombre">Nombre</label>
                                <input type="email" class="form-control" id="form-name" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label for="form-subject" class="i18nelement" data-i18n="key_contact_telefono">Teléfono</label>
                                <input type="text" class="form-control" id="form-subject" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label for="form-email" class="i18nelement" data-i18n="key_contact_email">Email</label>
                                <input type="email" class="form-control" id="form-email" placeholder="">
                            </div>                            
                            <div class="mb-3">
                                <label for="form-message" class="i18nelement" data-i18n="key_contact_mensaje">Mensaje</label>
                                <textarea class="form-control" id="form-message" placeholder="" rows="4"></textarea>
                            </div>
                            <button class="btn btn-danger btn-lg mt-3 i18nelement" data-i18n="key_contact_enviar" type="button" style="width:100%;"><i class="fa-solid fa-paper-plane"></i> Enviar</button>                
                        </form>
                        
                        <div class="row mt-5">
                            <div class="col-lg-6 col-md-6">
                                <div class="card-body d-flex align-items-center c-detail pl-0">                                    
                                    <div class="">
                                        <p class="lead">Blvd. Aeropuerto 1255<br>Predio Rancho Alegre, C.P. 37670<br>León, Gto. México</p>
                                        <p class="lead">MÉXICO<br>Tel. (477) 710 6000<br>Lada sin costo 01 (800) 710 5020</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="card-body d-flex align-items-center c-detail pl-0">                                    
                                    <div class="">
                                        <p class="lead">UNITED STATES<br>Toll Free: 1 877 676 7704<br>Sales USA<br>Ph. (321) 221 0443<br>sales@dcp.com.mx</p>
                                    </div>
                                </div>
                            </div>                                 
                        </div>

                    </div>
                </div>                


            </div>


        `;
    }

}