/* ----------------------------------------------
 * Generated by CaesarDeveloper on 2022-6-16 0:57:35
 * For more info contact at: caesararg.dev@gmail.com
 * Licensed under MIT License.
 * Main script to render DC Gaskets webpage.
 * DCGaskets: @init, @i18Loader, @updateContent, @niceSelectInit
 * ---------------------------------------------- */
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import LoadingScreen from './components/loadingScreen.js'
import App from "./components/pages/index.js";
import json_en from './assets/i18n/en.json';
import json_es from './assets/i18n/es.json';

(($) => {

    let i18Jsons = [];

    const DCGaskets = (() => {
        const init = () => {
            const start = new Date();
            const loadingScreen = new LoadingScreen();
            const app = new App();

            try {
                console.log('Iniciando app...');
                i18Jsons.push(json_es);
                i18Jsons.push(json_en);
                document.body.insertAdjacentHTML("afterbegin", loadingScreen.render());
                // document.querySelector('body').classList.add('stop-scrolling');
                document.getElementById("app").insertAdjacentHTML("afterbegin", app.render());

                let nav = document.querySelector('nav');
                window.addEventListener('scroll', function () {
                    if (window.pageYOffset > 100) {
                        nav.classList.add('bg-dark-transparent', 'shadow');
                    } else {
                        nav.classList.remove('bg-dark-transparent', 'shadow');
                    }
                });

                const swiper = new Swiper('.swiper', {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    grabCursor: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 40
                        }
                    },
                    autoplay: {
                        delay: 3000,
                    }
                })

                document.getElementById('btnViewDetailsJuntas').addEventListener('click', function () {
                    $("#modalJuntas").modal("show");
                });

                document.getElementById('btnViewDetailsEmpaques').addEventListener('click', function () {
                    $("#modalEmpaques").modal("show");
                });

                document.getElementById('btnViewDetailsPistones').addEventListener('click', function () {
                    $("#modalPistones").modal("show");
                });


                document.getElementById('mobileMenuInicio').addEventListener('click', function () {
                    if (document.getElementById("menuToggle").checked) {
                        document.getElementById("menuToggle").checked = false;
                    }
                });

                document.getElementById('mobileMenuEmpresa').addEventListener('click', function () {
                    if (document.getElementById("menuToggle").checked) {
                        document.getElementById("menuToggle").checked = false;
                    }
                });

                document.getElementById('mobileMenuProductos').addEventListener('click', function () {
                    if (document.getElementById("menuToggle").checked) {
                        document.getElementById("menuToggle").checked = false;
                    }
                });

                document.getElementById('mobileMenuNoticias').addEventListener('click', function () {
                    if (document.getElementById("menuToggle").checked) {
                        document.getElementById("menuToggle").checked = false;
                    }
                });                

                document.getElementById('mobileMenuContact').addEventListener('click', function () {
                    if (document.getElementById("menuToggle").checked) {
                        document.getElementById("menuToggle").checked = false;
                    }
                });

                setTimeout(() => {
                    let modalNewTech = new bootstrap.Modal(document.getElementById("modalNewTechnology"), {});

                    document.getElementById('btnModalNewTech').addEventListener('click', function () {
                        console.log("Click en modal");
                        modalNewTech.show();
                    });

                    document.getElementById('btnCloseModalNewTech').addEventListener('click', function () {
                        modalNewTech.hide();
                    });
                }, 3000);                

            } catch (error) {
                console.error(error);
            } finally {
                console.log('App iniciada...', start.getMilliseconds());
                setTimeout(() => {
                    loadingScreen.dissmiss();
                    // document.querySelector('body').classList.remove('stop-scrolling');
                    
                    if (window.location.href.indexOf("productos") > -1) {
                        window.location = '/#productos';
                    }

                    if (window.location.href.indexOf("noticias") > -1) {
                        window.location = '/#noticias';
                    }

                    if (window.location.href.indexOf("contacto") > -1) {
                        window.location = '/#contacto';
                    }

                }, 3000);
                niceSelectInit();
                i18Loader();                
            }
        }

        const i18Loader = async () => {

            const langs = ["es", "en"];

            const res = langs.reduce((acc, l, idx) => {
                acc[l] = {
                    translation: i18Jsons[idx]
                };
                return acc;
            }, {});
            await i18next.init({
                lng: "es",
                debug: false,
                resources: res
            });
            updateContent();
            i18next.on("languageChanged", () => {
                updateContent();
            });

            $('.langSelector').on('change', function (e) {
                i18next.changeLanguage(e.target.value);
        
                switch (e.target.value) {
                    case "es":
                        $(".nice-select>.current").prepend('');
                        $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');
                        break;

                    case "en":
                        $(".nice-select>.current").prepend('');
                        $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-us"></i> ');
                        break;

                    default:
                        $(".nice-select>.current").prepend('');
                        $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');
                        break;
                }

            });
        }

        const updateContent = () => {
            const elements = document.getElementsByClassName("i18nelement");
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const k = element.getAttribute("data-i18n");
                element.innerHTML = i18next.t(k);
            }
        }

        const niceSelectInit = () => {
            $(".langSelector").niceSelect();
            $(".nice-select>ul.list>li.option[data-value='en']").prepend('<i class="flag-icon flag-icon-us"></i> ');
            $(".nice-select>ul.list>li.option[data-value='es']").prepend('<i class="flag-icon flag-icon-mx"></i> ');
            $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');
        }

        return {
            init: init
        };
    })();


    $(document).ready(function () {
        DCGaskets.init();        
    }); 

})(jQuery);