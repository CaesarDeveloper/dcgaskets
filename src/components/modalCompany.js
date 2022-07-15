export default class ModalCompany {
    render() {
        return /*html*/ `
            <!-- FOOTER -->
            <div class="modal fade" id="modalCompany" tabindex="-1" aria-labelledby="modalCompanyLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content" style="height: 485px !important;">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="modalCompanyLabel"><i class="fa-solid fa-building-columns"></i> DC Gaskets</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row pd-20-company-video">
                                <div class="col-6">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item border-15" width="100%" height="315" src="https://www.youtube.com/embed/dJIOc5vkH24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="col-6" style="height: 322px;overflow-y: scroll;">
                                    <p class="lead text-black company-text-description i18nelement" data-i18n="key_company_description"></p>
                                </div>                                
                            </div>                           
                        </div>                 
                    </div>
                </div>
            </div>
        `;
    }
}