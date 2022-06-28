export default class WhatsAppWidget {

    constructor(props) {
        this.phone = props.phone;
        this.message = props.message;
    }

    render() {
        return /*html*/ `
               <a
                    href="https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}"
                    class="float box-shadow-light"
                    target="_blank"
                >
                    <i class="fa-brands fa-whatsapp my-float"></i>
                </a>
        `;
    }
}