export default class ModalProduct {

    constructor(props) {
        this.modalId = props.modalId;
        this.productType = props.productType;
        this.productImage = props.productImage;
        this.productDetails = props.productDetails;

        console.log(this.productType);

        this.descriptionProducto = "";
        this.datai18n = "";
        this.nuevaTecnologia = "";

        switch (this.productType) {
            case 'Juntas':
                console.log("Entra a juntas");
                this.datai18n = "key_section_product_1";
                this.descriptionProducto = `
                    <li class="i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_1">Junta de Cabeza en Multilámina o Grafito con materiales premium en su recubrimientos epóxico termo estable y resistente a la temperatura que ayuda al anclaje de su segundo recubrimientos de silicón para lograr un sellado eficiente.</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_3">Mayor ADAPATACIÓN a SUPERFICIES, con su menor densidad permite un SELLADO ÓPTIMO</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_2">Multilamina con acero de alta resistencia al igual que sus recubrimientos tales como: Viton®, NBR y Silicón.</li>                    
                    <p class="mt-3 i18nelement" data-i18n="key_section_product_modal_juntas_descriptiton_4">DESCUBRE NUEVA TECNOLOGÍA DCGraf <button type='button' class='btn btn-primary' id="btnModalNewTech">AQUÍ</button></p>
                `;
            break;

            case 'Empaques':
                this.datai18n = "key_section_product_2";
                this.descriptionProducto = `
                    <li class="i18nelement" data-i18n="key_section_product_modal_empaques_descriptiton_1">Múltiples, aros y juntas planas de escape fabricados en grafito expandido que resiste elevadas temperaturas con excelente compresibilidad para absorber imperfecciones en las superficies a sellar.</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_empaques_descriptiton_2">Juntas y Sellos de Hule con materias primas de alto desempeño para uso automotriz como son el vitón, silicón, poli acrilato y nitrilo, entre otros.</li>
                `;
            break;

            case 'Pistones':
                this.datai18n = "key_section_product_3";
                this.descriptionProducto = `                
                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_1">Acabados con Diamante y maquinados en equipo de control numérico (CNC) que brindan mayor precisión.</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_2">Corazón Monolítico que brinda mayor resistencia por su diseño fundido en una sola pieza.</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_3">Faldas Grafitadas para mejorar el rendimiento del pistón.</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_4">Fabricado bajo especificaciones de Equipo Original.</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_5">Vanguardia en Tecnología y Diseño</li>
                    <li class="i18nelement" data-i18n="key_section_product_modal_pistones_descriptiton_6">Fundiciones Ligeras</li>
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
                            <h5 class="modal-title text-center i18nelement" data-i18n="key_section_product_modal_title" id="${this.modalId}Label"><i class="fa-solid fa-file-lines"></i> Detalle de producto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        
                           <div class="card">
                                <div class="row">
                                    <div class="col-md-6" style="align-self: center;">
                                        <img id="main-image" src="${this.productImage}" width="100%" alt="productImage">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="product p-4">                                            
                                            <div class="mt-4 mb-3">                                                 
                                                <h5 class="text-uppercase i18nelement" data-i18n="${this.datai18n}">${this.productType}</h5>
                                                <div class="price d-flex flex-row align-items-center"> 
                                                    <span class="act-price i18nelement" data-i18n="key_section_product_features"></span>                                                    
                                                </div>
                                            </div>
                                            <p class="about">
                                                <ul>
                                                    ${this.descriptionProducto}
                                                </ul>
                                                ${this.nuevaTecnologia}
                                            </p>
                                            
                                            <div class="cart mt-4 align-items-center"> 
                                                <button class="btn btn-danger text-uppercase mr-2 px-4 i18nelement" data-i18n="key_modal_btn_download"><i class="fa-solid fa-download"></i> Descargar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>                 
                    </div>
                </div>
            </div>                                          
        `;
    }
}