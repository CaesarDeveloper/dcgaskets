import NavBar from '../../components/layout/navbar.js';
import HeaderVideo from '../../components/layout/headerVideo.js';
import SocialAppWidget from '../socialwidget.js';
import ModalLogin from '../../components/modals/login.js';
import ModalCompany from '../../components/modals/company.js';
import ModalProduct from '../../components/modals/product.js';
import ModalNewTechnology from '../../components/modals/newtechnology';
import SectionProducts from '../../components/sections/products.js';
import SectionDevelopment from '../../components/sections/development.js';
import SectionBanner from '../../components/sections/banner.js';
import SectionClients from '../../components/sections/clients.js';
import SectionNews from '../../components/sections/news.js';
import SectionContact from '../../components/sections/contact.js';
import Footer from '../../components/layout/footer.js';


import imgJuntas from '../../assets/images/icono_gasket.webp';
import imgEmpaques from '../../assets/images/icono_empaque.webp';
import imgPistones from '../../assets/images/icono_piston.webp';
export default class App {

    constructor() {
        this.nav = new NavBar({dark: false});
        this.headerVideo = new HeaderVideo({
            title: 'Innovación y tecnología de sellado para la industria automotriz.',
            subtitle: '',
            actionButtonText: 'Learn More',
            show: true
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
        <div id="content">
            ${this.nav.render()}
            ${this.headerVideo.render()}
            ${this.sectionProducts.render()}
            ${this.sectionDevelopment.render()}
            ${this.sectionBanner.render()}
            ${this.sectionClients.render()}
            ${this.sectionNews.render()}
            ${this.sectionContact.render()}
            ${this.footer.render()}

            <!-- Modal declarations -->
            ${this.modalLogin.render()}
            ${this.modalCompany.render()}
            ${this.modalProductJuntas.render()}
            ${this.modalProductEmpaques.render()}
            ${this.modalProductPistones.render()}
            ${this.ModalNewTechnology.render()}

            <!-- Widget declaration -->
            ${this.socialWidget.render()}
        </div>
        `;
    }
}