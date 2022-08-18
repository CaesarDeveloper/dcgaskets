// JUNTAS Y EMPAQUES
import BOLETINES_PDF_1 from '../../assets/files/boletines_tecnicos/Procedimiento_instalacion_reten.pdf?url';
import BOLETINES_PDF_2 from '../../assets/files/boletines_tecnicos/Cambio_de_sellos_de_valvula.pdf?url';
import BOLETINES_PDF_3 from '../../assets/files/boletines_tecnicos/Soluciona_tu_fuga.jpg';

import TABLAS_CONVERSIONES_PDF_1 from '../../assets/files/tablas_conversiones/tablas_para_conversiones1.jpg';
import TABLAS_CONVERSIONES_PDF_2 from '../../assets/files/tablas_conversiones/tablas_para_conversiones2.jpg';
import TABLAS_CONVERSIONES_PDF_3 from '../../assets/files/tablas_conversiones/tablas_para_conversiones3.jpg';

import TABLAS_TECNICAS_PDF_1 from '../../assets/files/tablas_tecnicas/tabla_nacional_2022_cv.pdf?url';
import TABLAS_TECNICAS_PDF_2 from '../../assets/files/tablas_tecnicas/tabla_americanos_2022_cv.pdf?url';
import TABLAS_TECNICAS_PDF_3 from '../../assets/files/tablas_tecnicas/tabla_asiaticas_2022.pdf?url';

import CONSEJOS_TECNICOS_PDF_1 from '../../assets/files/consejos_tecnicos/limpieza_de_orificios_roscados.pdf?url';
import CONSEJOS_TECNICOS_PDF_2 from '../../assets/files/consejos_tecnicos/tips_y_cuidado_de_los_retenes.pdf?url';


// PISTONES

import PISTONES_BOLETINES_TECNICOS_PDF_1 from '../../assets/files/pistones/ensamble_de_anillos_de_motor.pdf?url';

import PISTONES_INFORMACION_TECNICA_PDF_1 from '../../assets/files/pistones/fallas_comunes_en_pistones.pdf?url';

import PISTONES_CLAROS_PISTON_CILINDRO_PDF_1 from '../../assets/files/pistones/tabla_original_medidas_vento.jpg';
import PISTONES_CLAROS_PISTON_CILINDRO_PDF_2 from '../../assets/files/pistones/tablas_piston.pdf?url';

export default class ModalInfoTecnica {

    constructor(props) {
        this.modalId = props.modalId;
        this.productType = props.productType;
        this.downloadId = props.downloadId;

        console.log("---------", this.productType);

        // this.productImage = props.productImage;
        // this.productDetails = props.productDetails;

        // console.log(this.productType);

        // this.descriptionProducto = "";
        // this.datai18n = "";
        // this.nuevaTecnologia = "";

        switch (this.modalId) {
            case 'modalBoletinesTecnicos':
                this.title = "key_modal_title_boletinestecnicos";            
                this.pdfContent = `
                  <div class="col-md-4" style="align-self: center;">
                      <object data="${BOLETINES_PDF_1}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-4" style="align-self: center;">
                        <object data="${BOLETINES_PDF_2}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-4" style="align-self: center;">
                        <object data="${BOLETINES_PDF_3}" width="100%" height="500"></object>
                  </div>
                `;
            break;

            case 'modalTablaConversiones':
                this.title = "key_modal_title_tablasconversiones";
                this.pdfContent = `
                  <div class="col-md-4" style="align-self: center;">
                      <object data="${TABLAS_CONVERSIONES_PDF_1}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-4" style="align-self: center;">
                        <object data="${TABLAS_CONVERSIONES_PDF_2}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-4" style="align-self: center;">
                        <object data="${TABLAS_CONVERSIONES_PDF_3}" width="100%" height="500"></object>
                  </div>
                `;
            break;

            case 'modalTablaTecnica':
                this.title = "key_modal_title_tablastecnicas";
                this.pdfContent = `
                  <div class="col-md-4" style="align-self: center;">
                      <object data="${TABLAS_TECNICAS_PDF_1}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-4" style="align-self: center;">
                        <object data="${TABLAS_TECNICAS_PDF_2}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-4" style="align-self: center;">
                        <object data="${TABLAS_TECNICAS_PDF_3}" width="100%" height="500"></object>
                  </div>
                `;
            break;

            case 'modalConsejosTecnicos':
                this.title = "key_modal_title_consejostecnicos";
                this.pdfContent = `
                  <div class="col-md-6" style="align-self: center;">
                      <object data="${CONSEJOS_TECNICOS_PDF_1}" width="100%" height="500"></object>
                  </div>
                  <div class="col-md-6" style="align-self: center;">
                        <object data="${CONSEJOS_TECNICOS_PDF_2}" width="100%" height="500"></object>
                  </div>
                `;
            break;


            case 'modalPistonesBoletinesTecnicos':
                this.title = "key_modal_title_boletinestecnicos";
                this.pdfContent = `
                  <div class="col-md-6" style="align-self: center;">
                      <object data="${PISTONES_BOLETINES_TECNICOS_PDF_1}" width="100%" height="500"></object>
                  </div>        
                `;
            break;

            case 'modalPistonesInformacionTecnica':
                this.title = "key_modal_title_pistones_informaciontecnica";
                this.pdfContent = `
                  <div class="col-md-6" style="align-self: center;">
                      <object data="${PISTONES_INFORMACION_TECNICA_PDF_1}" width="100%" height="500"></object>
                  </div>        
                `;
            break;

            case 'modalPistonesCilindro':
                this.title = "key_modal_title_pistones_claro_cilindro";
                this.pdfContent = `
                  <div class="col-md-6" style="align-self: center;">
                      <object data="${PISTONES_CLAROS_PISTON_CILINDRO_PDF_1}" width="100%" height="500"></object>
                  </div> 
                  <div class="col-md-6" style="align-self: center;">
                      <object data="${PISTONES_CLAROS_PISTON_CILINDRO_PDF_2}" width="100%" height="500"></object>
                  </div>        
                `;
            break;

            default:
                break;
        }
    }



    render() {
        return /*html*/ `            
            <div class="modal fade" id="${this.modalId}" tabindex="-1" aria-labelledby="${this.modalId}Label" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center i18nelement" data-i18n="${this.title}" id="${this.modalId}Label"><i class="fa-solid fa-file-lines"></i> ${this.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <div class="card">
                                <div class="row col-md-12">
                                   ${this.pdfContent}
                                </div>
                            </div>                                                
                        </div>    
                        <div class="modal-footer">                            
                            <a id="${this.downloadId}" class="btn btn-lg btn-danger text-uppercase mr-auto px-4 i18nelement" data-i18n="key_section_product_modal_download_pdf"><i class="fa-solid fa-download"></i> Descargar catálogo en PDF</a>                            
                        </div>                        
                        
                    </div>
                </div>
            </div>                                          
        `;
    }
}