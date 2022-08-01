import VID_DC_GRAF_WEB from '../assets/video/VID_DC_GRAF_WEB.mp4';
export default class ModalNewTechnology {
    render() {
        return /*html*/ `
            <!-- FOOTER -->
            <div class="modal fade" id="modalNewTechnology" tabindex="-1" aria-labelledby="modalNewTechnologyLabel" aria-hidden="true">
                <div class="modal-dialog modal modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="modalNewTechnologyLabel"><i class="fas fa-video"></i> TECNOLOGÍA DCGraf</h5>
                            <button type="button" class="btn-close" id="btnCloseModalNewTech"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <video autoplay="autoplay" muted="" loop="loop" style="width: 100%;">
                                            <source src="${VID_DC_GRAF_WEB}" type="video/mp4"/>
                                        </video>
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