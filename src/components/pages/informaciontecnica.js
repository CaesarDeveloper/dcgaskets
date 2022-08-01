import NavBar from '../../components/layout/navbar';
import HeaderVideo from '../../components/layout/headerVideo.js';
import SocialAppWidget from '../socialwidget.js';
import ModalLogin from '../../components/modals/login.js';
import SectionInfoTecnica from "../../components/sections/infotecnica.js";
import Footer from '../../components/layout/footer.js';
export default class InfoTecnica {

    constructor() {
        this.nav = new NavBar({dark: true});
        this.headerVideo = new HeaderVideo({
            title: 'Innovación y tecnología de sellado para la industria automotriz.',
            subtitle: '',
            actionButtonText: 'Learn More',
            show: false
        });

        this.SectionInfoTecnica = new SectionInfoTecnica();
        this.footer = new Footer({
            company: 'DC Gaskets',
            year: new Date().getFullYear()
        });

        this.modalLogin = new ModalLogin({
            title: 'Iniciar sesión',
            btnCancelButtonText: 'Cancelar',
            btnLoginText: 'Iniciar sesión',
        });

        this.socialWidget = new SocialAppWidget({
            linkedin: 'https://mx.linkedin.com/company/dc-gaskets',
            instagram: 'https://www.instagram.com/dcgaskets/?hl=es-la',
            facebook: 'https://es-la.facebook.com/DCGaskets/',
            wsphone: '524777106000',
            wsmessage: 'Mensaje default para sporte de DC Gaskets'
        });
    }

    render() {
        return /*html*/ `
            ${this.nav.render()}               
            ${this.SectionInfoTecnica.render()}           
            ${this.footer.render()}

            <!-- Modal declarations -->
            ${this.modalLogin.render()}

            <!-- Widget declaration -->
            ${this.socialWidget.render()}
        `;
    }
}