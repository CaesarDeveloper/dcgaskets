export default class SocialAppWidget {

    constructor(props) {
        this.phone = props.phone;
        this.message = props.message;
    }

    render() {
        return /*html*/ `
               <!-- <a
                    href="https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}"
                    class="float box-shadow-light"
                    target="_blank"
                >
                    <i class="fa-brands fa-whatsapp my-float"></i>
                </a> -->
                     
                <div class="fab-wrapper">
                    <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
                    <label class="fab-button" for="fabCheckbox">
                        <span class="fab-dots fab-dots-1"></span>
                        <span class="fab-dots fab-dots-2"></span>
                        <span class="fab-dots fab-dots-3"></span>
                    </label>
                    <div class="fab-wheel">

                        <a class="fab-action fab-action-1" href="https://es-la.facebook.com/DCGaskets/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>

                        <a class="fab-action fab-action-2" href="https://www.instagram.com/dcgaskets/?hl=es-la" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>

                        <a class="fab-action fab-action-3" href="https://es-la.facebook.com/DCGaskets/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="fab-action fab-action-4" href="https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
        `;
    }
}