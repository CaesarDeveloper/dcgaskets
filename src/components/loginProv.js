import NavBar from './navbar';
import HeaderVideo from './headerVideo.js';
import SocialAppWidget from './socialwidget.js';
import ModalLogin from './modalLogin.js';
import ModalCompany from './modalCompany';
import ModalProduct from './modalProduct.js';
import ModalNewTechnology from './modalNewTechnology';
import SectionProducts from './sectionProducts.js';
import SectionInfoTecnica from "./sectionInfoTecnica.js";

import LoginProveedores from "./LoginProveedores.js";


export default class LoginProveedores {

    constructor() {        
        this.LoginProveedores = new LoginProveedores();
        
        this.footer = new Footer({
            company: 'DC Gaskets',
            year: new Date().getFullYear()
        });
    }

    render() {
        return /*html*/ `
            ${this.LoginProveedores.render()}                
            ${this.footer.render()}        
        `;
    }
}