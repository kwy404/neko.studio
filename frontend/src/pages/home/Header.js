import axios from "axios";

const Header = (props) => {
    return (
        <div className="pinning-header">
          <div className="pinning-header-container" style={{top: '0px', position: 'fixed', zIndex: `5000`, background: 'transparent'}}>
            <div className="main-header search-focused menu-navigation" role="navigation">
              <a 
              onClick={() => {
                props.setAnimes([])
                document.querySelector(`#searchInput`).value = ``
              }}
              aria-label="Netflix" className="logo" >
                <img 
                style={{
                  width: `90px`
                }}
                src={`./logo.png`}/>
              </a>
              <ul className="tabbed-primary-navigation">
                <li className="navigation-menu"><a className="menu-trigger" role="button" aria-haspopup="true" tabIndex={0}>Navegar</a></li>
                <li className="navigation-tab" onClick={() => {
                props.setAnimes([])
                document.querySelector(`#searchInput`).value = ``
              }}><a>Início</a></li>
                {/* <li className="navigation-tab"><a href="/browse/genre/83">Séries</a></li>
                <li className="navigation-tab"><a href="/browse/genre/34399">Filmes</a></li>
                <li className="navigation-tab"><a href="/latest">Bombando</a></li>
                <li className="navigation-tab"><a href="/browse/my-list">Minha lista</a></li> */}
              </ul>
              <div className="secondary-navigation search-focused">
                <div className="nav-element">
                  <div className="searchBox">
                    <div className="searchInput"><span className="icon-search" /><label htmlFor="searchInput" id="searchInput-label" className="visually-hidden">Buscar</label><input 
                    onKeyUp={async () => {
                        const data = await axios.get(`http://localhost:5000/search/${document.querySelector(`#searchInput`).value}/1`)
                        if(data.data.length > 0){
                            props.setAnimes(data.data)
                        }
                        const dataTwo = await axios.get(`http://localhost:5000/searchMovie/${document.querySelector(`#searchInput`).value}`)
                        if(dataTwo.data.length > 0){
                            props.setFilmes(dataTwo.data)
                        }
                    }}
                    type="text" id="searchInput" name="searchInput" placeholder data-search-input="true" dir="ltr" data-uia="search-box-input" aria-labelledby="searchInput-label" maxLength={80} defaultValue={``} className style={{opacity: 1, transitionDuration: '300ms'}} />
                    <span 
                    onClick={() => {
                      props.setAnimes([])
                      document.querySelector(`#searchInput`).value = ``
                    }}
                    role="button" tabIndex={0} aria-label="Limpar entrada" className="icon-close" /></div>
                  </div>
                </div>
                <div className="nav-element">
                  {/* <span className="notifications"><button className="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="Notificações"><span className="icon-button-notification" /><span className="notification-pill">4</span></button></span> */}
                </div>
                <div className="nav-element">
                  <div className="account-menu-item">
                    <div className="account-dropdown-button"><a href="/YourAccount" role="button" tabIndex={0} aria-haspopup="true" aria-expanded="false" aria-label="Xande - Conta e Configurações">
                      <span className="profile-link" role="presentation"><img className="profile-icon" src="./default.jpg" alt="" /></span></a>
                      {/* <span className="caret" role="presentation" /> */}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Header