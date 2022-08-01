import HEADER_VID_DCGASKETS_ALT from '../../assets/video/HEADER_VID_DCGASKETS_ALT_3.mp4';

export default class HeaderVideo {

  constructor(props) {
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.actionButtonText = props.actionButtonText;
    this.show = props.show;
    this.showVideo = this.show == true ? this.showVideo = "block"  : 'none';
  }

  render() {
    return /*html*/ `
              <header style="display:${this.showVideo}">
                <!-- <main id="content"> -->
                  <div class="overlay" id="videoOverlay"></div>                
                  <video id="bgVideoDCGaskets" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="videoHeader">
                    <source src="${HEADER_VID_DCGASKETS_ALT}" type="video/mp4"/>
                  </video>
                  <div class="container h-100" id="containerVideo">
                    <div class="d-flex h-100 text-center align-items-center">
                      <div class="w-100 text-white">
                        <h1 id="titleHeader" class="i18nelement display-1 fw-bold text-focus-in" data-i18n="key_title_hero"> 
                          ${this.title}                           
                        </h1>
                        <h3 id="subtitleHeader" class="i18nelement mb-0 text-focus-in mt-5" data-i18n="key_subtitle_hero"> ${this.subtitle} </h3>                        

                        <div class="scroll-wrap">
                          <a href="#productosSection" class="scroll-down w-inline-block">
                            <!-- <img src="https://uploads-ssl.webflow.com/620ad2336e1661b45ed12787/620d4329b50be612fae0d780_bx_bx-down-arrow-alt.svg" loading="lazy" alt="Scroll down" class="scroll-image"> -->
                            <i class="fas fa-arrow-down"></i>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>                
                <!-- </main> -->
              </header>
        `;
  }
}