'use client'

import Link from "next/link";
import Image from "next/image"
import ButtonModalLogin from "./ModalLogin/ModalLogin";
import { FaHeadset } from 'react-icons/fa';

import { Navbar, Button } from "@nextui-org/react";

import './navbar.css'

export default function Navigation() {

  return (
    <div className="container-navigation" data-aos="fade-up">
      <Navbar isBordered variant="sticky">
        <Navbar.Brand className="container-brand">
          <div className="container-nav-brand">
            <Navbar.Toggle aria-label="toggle navigation" className="btn-mobile" />
            <Link href="/">
              <Image className="img-logo-nav" width="90" height="65" src="/logo-brip-pngg.png" alt="logo Briptravel" />
            </Link>
          </div>
          <div className="container-nav-login">
            <ButtonModalLogin tittle="" />
            <Link className='btn-ventas-brip'
              href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0"
              target='_blank'><FaHeadset /> Ventas </Link>
          </div>
        </Navbar.Brand>

        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Link className="btn-navbar" href="#promociones-briptravel" >Promociones</Link>
          <Link className="btn-navbar" href="#ayuda-briptravel">Viajeros</Link>
          <ButtonModalLogin tittle="Iniciar sesión" />
          <a className='btn-ventas-brip' css={{ minWidth: "100%", }}
            href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0"
            target='_blank'><FaHeadset style={{ fontSize: "22px" }} /> Ventas Briptravel </a>
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link color="inherit" css={{ minWidth: "100%", }} href="#promociones-briptravel"> Promociones </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link color="inherit" css={{ minWidth: "100%", }} href="#ayuda-briptravel">Viajeros</Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
