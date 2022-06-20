import NavBar from '../components/navbar.js';
import Hero from '../components/hero.js';

const nav = new NavBar();
const hero = new Hero(nav.render(), {
    title: 'Desarrollo y fabricación de juntas y empaques',
    subtitle: 'Sellado de alto desempeño',
    actionButtonText: 'Learn More'
});

export const PATHS = {
    home: {
        path: "/",
        template: "",
    },
    about: {
        path: "/about",
        template: `<h1>👩🏻‍💻 Sobre mi</h1>`,
    },
    contact: {
        path: "/contact",
        template: `<h1>📱 Contacto</h1>`,
    }
}