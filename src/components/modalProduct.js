export default class ModalProduct {

    constructor(props) {
        this.modalId = props.modalId;
        this.productType = props.productType;
        this.productImage = props.productImage;
        this.productDetails = props.productDetails;
    }

    render() {
        return /*html*/ `

            <div class="modal fade" id="${this.modalId}" tabindex="-1" aria-labelledby="${this.modalId}Label" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="${this.modalId}Label"><i class="fa-solid fa-file-lines"></i> Detalle de producto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        
                           <div class="card">
                                <div class="row">
                                    <div class="col-md-6" style="align-self: center;">
                                        <img id="main-image" src="${this.productImage}" width="100%">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="product p-4">                                            
                                            <div class="mt-4 mb-3">                                                 
                                                <h5 class="text-uppercase">${this.productType}</h5>
                                                <div class="price d-flex flex-row align-items-center"> 
                                                    <span class="act-price">Características</span>                                                    
                                                </div>
                                            </div>
                                            <p class="about">
                                                <ul>
                                                    <li>Junta de Cabeza en Multilámina o Grafito con materiales premium en su recubrimientos epóxico termo estable y resistente a la temperatura que ayuda al anclaje de su segundo recubrimientos de silicón para lograr un sellado eficiente.</li>
                                                    <li>Múltiples, aros y juntas planas de escape fabricados todos en grafito expandido que resiste muy elevadas temperaturas y con excelente compresibilidad para absorber imperfecciones en las superficies a sellar.</li>
                                                    <li>Juntas y Sellos de Hule donde se usan materias primas de alto desempeño para uso automotriz como son el vitón, silicón, poli acrilato y nitrilo, entre otras.</li>
                                                </ul>
                                            </p>
                                            
                                            <div class="cart mt-4 align-items-center"> 
                                                <button class="btn btn-danger text-uppercase mr-2 px-4"><i class="fa-solid fa-download"></i> Descargar catálogo en PDF</button>
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