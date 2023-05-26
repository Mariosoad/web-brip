import Link from "next/link"
import Image from "next/image"
import './navbar.css'

export default function Navbar() {

  return (
    <div className="container-navigation">
      <header className="navigation">
        <div>
          <Image width="80" height="80" src="/logo-briptravel.png" alt="logo Briptravel" />
        </div>
        <nav className="nav-container">
          <ul>
            <li>Idioma</li>
            <li>Iniciar sesión</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
