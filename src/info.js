/* ----------------------------------------------
 * Generated by CaesarDeveloper on 2022-6-16 0:57:35
 * For more info contact at: caesararg.dev@gmail.com
 * Licensed under MIT License.
 * Main script to render DC Gaskets webpage.
 * DCGaskets: @init, @i18Loader, @updateContent, @niceSelectInit
 * ---------------------------------------------- */
import "./main.css";
import "./responsive.css";
import InfoTecnica from "./components/infotecnica";
import json_en from './assets/i18n/en.json';
import json_es from './assets/i18n/es.json';

(($) => {

    let i18Jsons = [];

    const DCGaskets = (() => {
        const init = () => {
            const start = new Date();
            const app = new InfoTecnica();            

            try {
                console.log('Iniciando app...');
                i18Jsons.push(json_es);
                i18Jsons.push(json_en);
                document.querySelector('body').classList.add('stop-scrolling');
                document.getElementById("app").insertAdjacentHTML("afterbegin", app.render());                


                let nav = document.querySelector('nav');
                window.addEventListener('scroll', function () {
                    if (window.pageYOffset > 100) {
                        nav.classList.add('bg-dark-transparent', 'shadow');
                    } else {
                        nav.classList.remove('bg-dark-transparent', 'shadow');
                    }
                });             

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

                document.getElementById('mobileMenuContact').addEventListener('click', function () {
                    if (document.getElementById("menuToggle").checked) {
                        document.getElementById("menuToggle").checked = false;
                    }
                });
                
            } catch (error) {
                console.error(error);
            } finally {
                console.log('App iniciada...', start.getMilliseconds());
                setTimeout(() => {
                    document.querySelector('body').classList.remove('stop-scrolling');
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