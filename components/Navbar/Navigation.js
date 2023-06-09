
import Image from "next/image"
import './navbar.css'

export default function Navigation() {

  return (
    <div className="container-navigation">
      <header className="navigation">
        <div>
          <Image className="img-logo-nav" width="90" height="65" src="/logo-brip-pngg.png" alt="logo Briptravel" />
        </div>
        <nav className="nav-container">
          <ul>
            {/* <li>Idioma</li> */}
            <li>Iniciar sesión</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
