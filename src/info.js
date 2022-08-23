/* ----------------------------------------------
 * Generated by CaesarDeveloper on 2022-6-16 0:57:35
 * For more info contact at: caesararg.dev@gmail.com
 * Licensed under MIT License.
 * Main script to render DC Gaskets webpage.
 * DCGaskets: @init, @i18Loader, @updateContent, @niceSelectInit
 * ---------------------------------------------- */
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import InfoTecnica from "./components/pages/informaciontecnica.js";
import json_en from './assets/i18n/en.json';
import json_es from './assets/i18n/es.json';

import BOLETINES_PDF_1 from "./assets/files/boletines_tecnicos/Cambio_de_sellos_de_valvula.pdf?url";
import BOLETINES_PDF_2 from "./assets/files/boletines_tecnicos/Procedimiento_instalacion_reten.pdf?url";
import BOLETINES_PDF_3 from "./assets/files/boletines_tecnicos/Soluciona_tu_fuga.jpg";

import TABLAS_CONVERSIONES_PDF_1 from "./assets/files/tablas_conversiones/tablas_para_conversiones1.jpg";
import TABLAS_CONVERSIONES_PDF_2 from "./assets/files/tablas_conversiones/tablas_para_conversiones2.jpg";
import TABLAS_CONVERSIONES_PDF_3 from "./assets/files/tablas_conversiones/tablas_para_conversiones3.jpg";

import TABLAS_TECNICAS_PDF_1 from "./assets/files/tablas_tecnicas/tabla_nacional_2022_cv.pdf?url";
import TABLAS_TECNICAS_PDF_2 from "./assets/files/tablas_tecnicas/tabla_americanos_2022_cv.pdf?url";
import TABLAS_TECNICAS_PDF_3 from "./assets/files/tablas_tecnicas/tabla_asiaticas_2022.pdf?url";

import CONSEJOS_TECNICOS_PDF_1 from "./assets/files/consejos_tecnicos/limpieza_de_orificios_roscados.pdf?url";
import CONSEJOS_TECNICOS_PDF_2 from "./assets/files/consejos_tecnicos/tips_y_cuidado_de_los_retenes.pdf?url";


import PISTONES_BOLETINES_TECNICOS_PDF_1 from './assets/files/pistones/ensamble_de_anillos_de_motor.pdf?url';

import PISTONES_INFORMACION_TECNICA_PDF_1 from './assets/files/pistones/fallas_comunes_en_pistones.pdf?url';


import PISTONES_CLAROS_PISTON_CILINDRO_PDF_1 from './assets/files/pistones/tabla_original_medidas_vento.jpg';
import PISTONES_CLAROS_PISTON_CILINDRO_PDF_2 from './assets/files/pistones/tablas_piston.pdf?url';


import dataJuntasEmpaques from "./api/juntasempaques.json";

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

                Object.freeze(i18Jsons);

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

                    
                document.getElementById('btnViewDetailsBoletinesTecnicos').addEventListener('click', function () {
                    $("#modalBoletinesTecnicos").modal("show");
                });

                document.getElementById('btnViewDetailsTablasConversiones').addEventListener('click', function () {
                    $("#modalTablaConversiones").modal("show");
                });

                document.getElementById('btnViewDetailsTablasTecnicas').addEventListener('click', function () {
                    $("#modalTablaTecnica").modal("show");
                });

                document.getElementById('btnViewDetailsConsejosTecnicos').addEventListener('click', function () {
                    $("#modalConsejosTecnicos").modal("show");
                });
                

                document.getElementById('btnViewDetailsPistonesBoletinesTecnicos').addEventListener('click', function () {                    
                    $("#modalPistonesBoletinesTecnicos").modal("show");
                });


                document.getElementById('btnViewDetailsPistonesInformacionTecnica').addEventListener('click', function () {                    
                    $("#modalPistonesInformacionTecnica").modal("show");
                });

                document.getElementById('btnViewDetailsPistonesClarosCilindro').addEventListener('click', function () {                    
                    $("#modalPistonesCilindro").modal("show");
                });
                

                document.getElementById('btnDescargarBoletines').addEventListener('click', function () {
                    var urls = [BOLETINES_PDF_1, BOLETINES_PDF_2, BOLETINES_PDF_3];
                    downloadFiles(urls)
                });

                document.getElementById('btnDescargarTablasConversiones').addEventListener('click', function () {
                    var urls = [TABLAS_CONVERSIONES_PDF_1, TABLAS_CONVERSIONES_PDF_2, TABLAS_CONVERSIONES_PDF_3];
                    downloadFiles(urls)
                });

                document.getElementById('btnDescargarTablasTecnicas').addEventListener('click', function () {
                    var urls = [TABLAS_TECNICAS_PDF_1, TABLAS_TECNICAS_PDF_2, TABLAS_TECNICAS_PDF_3];
                    downloadFiles(urls)
                });

                document.getElementById('btnDescargarConsejosTecnicos').addEventListener('click', function () {
                    var urls = [CONSEJOS_TECNICOS_PDF_1, CONSEJOS_TECNICOS_PDF_2];
                    downloadFiles(urls)
                });


                document.getElementById('btnDescargarPistonesBoletinesTecnicos').addEventListener('click', function () {
                    var urls = [PISTONES_BOLETINES_TECNICOS_PDF_1];
                    downloadFiles(urls)
                });


                document.getElementById('btnDescargarPistonesInformacionTecnica').addEventListener('click', function () {
                    var urls = [PISTONES_INFORMACION_TECNICA_PDF_1];
                    downloadFiles(urls)
                });

                document.getElementById('btnDescargarPistoneCilindro').addEventListener('click', function () {
                    var urls = [PISTONES_CLAROS_PISTON_CILINDRO_PDF_1, PISTONES_CLAROS_PISTON_CILINDRO_PDF_2];
                    downloadFiles(urls)
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


                document.getElementById('mobileMenuInicio').addEventListener('click', function () {
                    window.location.href = '/#';
                });

                document.getElementById('mobileMenuProductos').addEventListener('click', function () {
                    window.location.href = '/#productos';
                });

                document.getElementById('mobileMenuNoticias').addEventListener('click', function () {
                    window.location.href = '/#noticias';
                });

                document.getElementById('mobileMenuContact').addEventListener('click', function () {
                    window.location.href = '/#contacto';
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

        const downloadFiles = (urls) => {

            for (const url of urls) {   // here's the for..of statement                
                let a = document.createElement("a");
                a.setAttribute('href', url);
                a.setAttribute('download', '');
                a.setAttribute('target', '_blank');
                a.click();
            }

            if (urls.length == 0) {
                // clearInterval();
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
                lng: localStorage.getItem("lang") || "es",
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
                        localStorage.setItem("lang", "es");
                        $(".nice-select>.current").prepend('');
                        $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');
                        break;

                    case "en":
                        localStorage.setItem("lang", "en");
                        $(".nice-select>.current").prepend('');
                        $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-us"></i> ');
                        break;

                    default:
                        localStorage.setItem("lang", "es");
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

            if (localStorage.getItem("lang") == "es") {                
                $(".langSelector").val("es");
                $(".langSelector").niceSelect('update');
                $(".nice-select>.current").prepend('');
                $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');
                $(".nice-select>ul.list>li.option[data-value='es']").prepend('<i class="flag-icon flag-icon-mx"></i> ');
                $(".nice-select>ul.list>li.option[data-value='en']").prepend('<i class="flag-icon flag-icon-us"></i> ');
            } 

            if (localStorage.getItem("lang") == "en") {                
                $(".langSelector").val("en");
                $(".langSelector").niceSelect('update');
                $(".nice-select>.current").prepend('');
                $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-us"></i> ');
                $(".nice-select>ul.list>li.option[data-value='en']").prepend('<i class="flag-icon flag-icon-us"></i> ');
                $(".nice-select>ul.list>li.option[data-value='es']").prepend('<i class="flag-icon flag-icon-mx"></i> ');
            }

            
            // $(".nice-select>ul.list>li.option[data-value='en']").prepend('<i class="flag-icon flag-icon-us"></i> ');
            // $(".nice-select>ul.list>li.option[data-value='es']").prepend('<i class="flag-icon flag-icon-mx"></i> ');
            // $(".nice-select>.current").prepend('<i class="flag-icon flag-icon-mx"></i> ');
            
        }

         const renderCards = () => {
            dataJuntasEmpaques.map(function(element){
                $("#juntasEmpaquesContainer").append(
                    `<div class="card b-h-box position-relative font-14 mb-4 border-15 box-shadow-light" style="height: 335px;">
                            <img class="card-img border-15 img-technical-info" src="" alt="Card image">
                            <div class="card-img-overlay overflow-hidden border-15">
                                <h2 class="fw-bold">Tablas técnicas</h2>
                                <h6>Tablas nacionales y americanas</h6>
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-grad-red btn-sm overflow-hidden text-white px-3 py-1 font-weight-normal i18nelement" data-i18n="key_section_product_btn_details" id="${element.id_view_details}">Ver detalles</button>
                                </div>
                            </div>
                    </div>`
                );            
            })
        }

        return {
            init: init
        };
    })();


    $(document).ready(function () {
        DCGaskets.init();        
    }); 

})(jQuery);