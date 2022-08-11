import LOGO_DCGASKETS from '../../assets/images/logo_gaskets.webp';
export default class Footer {
    constructor(props) {
        this.company = props.company;
        this.year = props.year;
    }
    render() {
        return /*html*/`
            <section class="bg-dark text-light" style="bottom: 0;position: relative;width: 100%;">
                <div class="py-5 container">
                    <div class="row">
                        <div class="col-12">
                            <div class="lc-block">
                                <img class="img-fluid" alt="logo" src="${LOGO_DCGASKETS}" width="80" height="auto"/> ${this.company} - ${this.year} <span class="i18nelement" data-i18n="key_footer_section_right_reserved">Derechos Reservados</span>. 
                                <a href="https://www.dcp.com.mx/publica/terminos2.jsp?idioma=ES-MX" target="_blank" class="br-bottom-link i18nelement" data-i18n="key_footer_section_right_terms_conditions">Términos de Uso </a> <span class="i18nelement" data-i18n="key_footer_and"> y </span>
                                <a href="https://www.dcp.com.mx/publica/politica2.jsp?idioma=ES-MX" target="_blank" class="br-bottom-link i18nelement" data-i18n="key_footer_section_privacy_declaration">Declaración de Privacidad </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
        ;
    }
}