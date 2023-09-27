import './styles/header.css'

function Header(){
    return (
        <header>
          <div className="caja">
              <div className="logo">
                <a href="/"><img src="/Logo bueno edicion final.png" alt="Logo"/></a>
              </div>
              <div className="item">
                <a href="/Unirse">Unirse a un grupo</a>
              </div>
              <div className="item">
                <a href="/Crear">Crear grupo</a>
              </div>
              <div className="profile">
                <a href="/Login"><img src="/profile.png" alt="Perfil"/></a>
              </div>
          </div>
        </header>
    );
}

export default Header;
