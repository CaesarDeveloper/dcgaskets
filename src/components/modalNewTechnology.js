export default class ModalNewTechnology {
    render() {
        return /*html*/ `
            <!-- FOOTER -->
            <div class="modal fade" id="modalNewTechnology" tabindex="-1" aria-labelledby="modalNewTechnologyLabel" aria-hidden="true">
                <div class="modal-dialog modal modal-dialog-centered">
                    <div id="modalContentCompany" class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="modalNewTechnologyLabel"><i class="fas fa-video"></i> </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row pd-20-company-video">
                                <div class="col-md-12">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <h5>Aqui va el video</h5>                                    
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