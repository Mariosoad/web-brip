import Link from "next/link";
import Image from "next/image"
import ButtonModalLogin from "./ModalLogin/ModalLogin";
import './navbar.css'

export default function Navigation() {

  return (
    <div className="container-navigation">
      <header className="navigation">
        <div>
          <Link href="/">
            <Image className="img-logo-nav" width="90" height="65" src="/logo-brip-pngg.png" alt="logo Briptravel" />
          </Link>
        </div>
        <nav className="nav-container">
          <ul>
            {/* <li>Idioma</li> */}
            <Link href="/#ayuda-briptravel" scroll={false}>Ayuda</Link>
            <Link href="/#promociones-briptravel" scroll={false}>Promociones</Link>
            <ButtonModalLogin />
          </ul>
        </nav>
      </header>
    </div>
  )
}
