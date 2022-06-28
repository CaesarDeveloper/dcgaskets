import HEADER_VID_DCGASKETS from '../assets/video/HEADER_VID_DCGASKETS.mp4';

export default class HeaderVideo {

  constructor(props) {
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.actionButtonText = props.actionButtonText;
  }

  render() {
    return /*html*/ `
              <header>
                <!-- <main id="content"> -->
                  <div class="overlay" id="videoOverlay"></div>                
                  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="videoHeader">
                    <source src="${HEADER_VID_DCGASKETS}" type="video/mp4"/>
                  </video>                  
                  <div class="container h-100" id="containerVideo">
                    <div class="d-flex h-100 text-center align-items-center">
                      <div class="w-100 text-white">
                        <h1 id="titleHeader" class="i18nelement display-1 fw-bold text-focus-in" data-i18n="key_title_hero"> 
                          ${this.title}                           
                        </h1>
                        <h3 id="subtitleHeader" class="i18nelement mb-0 text-focus-in mt-5" data-i18n="key_subtitle_hero"> ${this.subtitle} </h3>                        

                      </div>
                    </div>
                  </div>                
                <!-- </main> -->
              </header>
        `;
  }
}