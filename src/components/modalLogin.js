export default class ModalLogin {

    constructor(props) {
        this.title = props.title;
        this.btnCancelButtonText = props.btnCancelButtonText;
        this.btnLoginText = props.btnLoginText;
    }

    render() {
        return /*html*/ `
            <!-- FOOTER -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="exampleModalLabel"><i class="fas fa-sign-in-alt"></i> ${this.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="txtUsuario" class="col-form-label">Usuario</label>
                                <input type="text" class="form-control" id="txtUsuario">
                            </div>
                            <div class="mb-3">
                                <label for="txtPassword" class="col-form-label">Contraseña</label>
                                <input type="text" class="form-control" id="txtPassword">
                            </div>
                            <div class="mb-3">
                                <a href="#" class="float-end">¿Has olvidado tu contraseña?</a>
                                <input class="form-check-input" type="checkbox" value="" id="remember" required>
                                <label class="form-check-label" for="remember">Recordarme</label>                                
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${this.btnCancelButtonText}</button>
                        <button type="button" class="btn btn-danger">${this.btnLoginText}</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }
}