export default class Footer {

    constructor(props) {
        this.company = props.company;
        this.year = props.year;
    }

    render() {
        return /*html*/ `
            <!-- FOOTER -->
            <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-black text-white-50">
                <div class="container text-center">
                <small>Copyright &copy; ${this.company} - ${this.year}</small>
                </div>
            </footer>
        `;
    }
}