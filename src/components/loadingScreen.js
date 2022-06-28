export default class LoadingScreen {
    render() {
        return /*html*/ `
        <div class="cube-layout">
               <div class="cube-wrapper">
                    <div class="cube-folding">
                        <span class="leaf1"></span>
                        <span class="leaf2"></span>
                        <span class="leaf3"></span>
                        <span class="leaf4"></span>
                    </div>
                    <span class="loading fw-bold" data-name="Loading">DC
                        <span style="color: #e63a56">GASKETS</span>
                    </span>
                </div>
        </div>
        `;
    }

    dissmiss() {
        document.querySelector('.cube-layout').remove();
    }
}