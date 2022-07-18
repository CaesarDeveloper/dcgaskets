import NavBar from './navbar';
import HeaderVideo from './headerVideo.js';
import SocialAppWidget from './socialwidget.js';
import ModalLogin from './modalLogin.js';
import ModalCompany from './modalCompany';
import ModalNewTechnology from './modalNewTechnology';
import SectionProducts from './sectionProducts.js';
import SectionDevelopment from './sectionDevelopment.js';
import SectionBanner from './sectionBanner.js';
import SectionClients from './sectionClients.js';
import SectionContact from './sectionContact.js';
import Footer from './footer.js';

export default class App {

    constructor() {
        this.nav = new NavBar();
        this.headerVideo = new HeaderVideo({
            title: 'Innovación y tecnología de sellado para la industria automotriz.',
            subtitle: '',
            actionButtonText: 'Learn More'
        });
        this.sectionProducts = new SectionProducts();
        this.sectionDevelopment = new SectionDevelopment();
        this.sectionBanner = new SectionBanner();
        this.sectionClients = new SectionClients();
        this.footer = new Footer({
            company: 'DC Gaskets',
            year: new Date().getFullYear()
        });

        this.modalLogin = new ModalLogin({
            title: 'Iniciar sesión',
            btnCancelButtonText: 'Cancelar',
            btnLoginText: 'Iniciar sesión',
        });

        this.modalCompany = new ModalCompany();
        this.ModalNewTechnology = new ModalNewTechnology();


        this.socialWidget = new SocialAppWidget({
            linkedin: 'https://mx.linkedin.com/company/dc-gaskets',
            instagram: 'https://www.instagram.com/dcgaskets/?hl=es-la',
            facebook: 'https://es-la.facebook.com/DCGaskets/',
            wsphone: '524777106000',
            wsmessage: 'Mensaje default para sporte de DC Gaskets'
        });

        this.sectionContact = new SectionContact();
    }

    render() {
        return /*html*/ `
            ${this.nav.render()}
            ${this.headerVideo.render()}
            ${this.sectionProducts.render()}
            ${this.sectionDevelopment.render()}
            ${this.sectionBanner.render()}
            ${this.sectionClients.render()}
            ${this.sectionContact.render()}
            ${this.footer.render()}

            <!-- Modal declarations -->
            ${this.modalLogin.render()}
            ${this.modalCompany.render()}
            ${this.ModalNewTechnology.render()}

            <!-- Widget declaration -->
            ${this.socialWidget.render()}
        `;
    }
}