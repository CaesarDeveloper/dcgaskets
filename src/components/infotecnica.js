import NavBar from './navbar';
import HeaderVideo from './headerVideo.js';
import SocialAppWidget from './socialwidget.js';
import ModalLogin from './modalLogin.js';
import ModalCompany from './modalCompany';
import ModalProduct from './modalProduct.js';
import ModalNewTechnology from './modalNewTechnology';
import SectionProducts from './sectionProducts.js';
import SectionInfoTecnica from "./sectionInfoTecnica.js";


import SectionDevelopment from './sectionDevelopment.js';
import SectionBanner from './sectionBanner.js';
import SectionClients from './sectionClients.js';
import SectionNews from './sectionNews.js';
import SectionContact from './sectionContact.js';
import Footer from './footer.js';


import imgJuntas from '../assets/images/icono_gasket.png';
import imgEmpaques from '../assets/images/icono_empaque.png';
import imgPistones from '../assets/images/icono_piston.png';
export default class InfoTecnica {

    constructor() {
        this.nav = new NavBar({dark: true});
        this.headerVideo = new HeaderVideo({
            title: 'Innovación y tecnología de sellado para la industria automotriz.',
            subtitle: '',
            actionButtonText: 'Learn More',
            show: false
        });
        this.sectionProducts = new SectionProducts();

        this.SectionInfoTecnica = new SectionInfoTecnica();

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

        this.modalProductJuntas = new ModalProduct({
            modalId: "modalJuntas",
            productType: "Juntas",
            productImage: imgJuntas,
            productDetails: ""
        });

        this.modalProductEmpaques = new ModalProduct({
            modalId: "modalEmpaques",
            productType: "Empaques",
            productImage: imgEmpaques,
            productDetails: ""
        });

        this.modalProductPistones = new ModalProduct({
            modalId: "modalPistones",
            productType: "Pistones",
            productImage: imgPistones,
            productDetails: ""
        });

        this.ModalNewTechnology = new ModalNewTechnology();

        this.socialWidget = new SocialAppWidget({
            linkedin: 'https://mx.linkedin.com/company/dc-gaskets',
            instagram: 'https://www.instagram.com/dcgaskets/?hl=es-la',
            facebook: 'https://es-la.facebook.com/DCGaskets/',
            wsphone: '524777106000',
            wsmessage: 'Mensaje default para sporte de DC Gaskets'
        });

        this.sectionNews = new SectionNews();

        this.sectionContact = new SectionContact();
    }

    render() {
        return /*html*/ `
            ${this.nav.render()}
            ${this.headerVideo.render()}          
            ${this.SectionInfoTecnica.render()}            
           
            ${this.footer.render()}

            <!-- Modal declarations -->
            ${this.modalLogin.render()}
            ${this.modalCompany.render()}

            <!-- Widget declaration -->
            ${this.socialWidget.render()}
        `;
    }
}