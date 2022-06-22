import logo_dc from '../assets/images/logo_gaskets.png';

export default class NavBar {


  render() {
    return /*html*/ `
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="${logo_dc}" alt="Logo DC" width="80"/></a>
            <div id="menuArea">
              <input type="checkbox" id="menuToggle"/>
              <label for="menuToggle" class="menuOpenLabel">
                <div class="openDiv"></div>
              </label>

              <div class="menuNav menuEffects">
                <label for="menuToggle"></label>
                <div class="menuContent">
                  <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Empresa</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              class="navbar-toggler d-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">              
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mx-auto"></div>
              <ul class="navbar-nav">            
                <li class="nav-item active">                  
                  <a class="nav-link text-white hover-1 i18nelement" data-i18n="key_menu_inicio" href="#" id="Inicio">Inicio</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white i18nelement" data-bs-toggle="dropdown" data-i18n="key_menu_empresa" href="#" id="Home">Empresa</a>
                  <ul class="dropdown-menu">
                    <li> <a class="dropdown-item i18nelement" href="#" data-i18n="key_submenu_empresa_video"><i class="fa fa-play"></i>  Ver video </a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white hover-1 i18nelement" data-i18n="key_menu_productos" href="#productos" id="About">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white hover-1 i18nelement" data-i18n="key_menu_contacto" href="#" id="Contact">Contacto</a>
                </li>                
                <li class="nav-item">
                    <button class="btn btn-danger ms-5 i18nelement" data-i18n="key_btn_login" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar sesión</button>
                </li>
                <li class="nav-item ms-5">
                    <select class="small" id="langSelector" name="lang">
                        <option value="es"> Español</option>
                        <option value="en"> English</option>
                    </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>            
        `;
  }

}