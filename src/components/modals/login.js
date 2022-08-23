export default class ModalLogin {

    constructor(props) {
        this.title = props.title;
        this.btnCancelButtonText = props.btnCancelButtonText;
        this.btnLoginText = props.btnLoginText;
    }

    render() {
        return /*html*/ `
            <!-- FOOTER -->
            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center i18nelement" data-i18n="key_title_login_modal" id="loginModalLabel"><i class="fas fa-sign-in-alt"></i> ${this.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="txtUsuario" class="col-form-label i18nelement" data-i18n="key_user_login_modal">Usuario</label>
                                <input type="text" class="form-control" id="txtUsuario">
                            </div>
                            <div class="mb-3">
                                <label for="txtPassword" class="col-form-label i18nelement" data-i18n="key_password_login_modal">Contraseña</label>
                                <input type="password" class="form-control" id="txtPassword">
                            </div>
                            <div class="mb-3">
                                <a href="#" class="float-end i18nelement" data-i18n="key_forgotpassword_login_modal">¿Has olvidado tu contraseña?</a>
                                <input class="form-check-input" type="checkbox" value="" id="remember" required>
                                <label class="form-check-label i18nelement" data-i18n="key_remember_login_modal" for="remember">Recordarme</label>                                
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary i18nelement" data-i18n="key_btn_cancel_login_modal" data-bs-dismiss="modal">${this.btnCancelButtonText}</button>
                        <button type="button" class="btn btn-danger i18nelement" data-i18n="key_btn_login">${this.btnLoginText}</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }
}