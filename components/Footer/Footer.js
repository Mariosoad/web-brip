
import './footer.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { AiFillFacebook } from 'react-icons/ai';

import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className='container-footer'>
                <div className='container-newsletter'>
                    <p>Ofertas exclusivas de viajes por email</p>
                    <div className='child-container-newsletter'>
                        <input placeholder='Ingrese su email' />
                        <a className='btn-newsletter'>Subscribirme</a>
                    </div>
                </div>
                <div className='child-container-footer'>
                    <div className='container-info-footer'>
                        <div>
                            <h4><FaPhoneAlt className='icon-tittle-footer' /><strong>¿Necesitas ayuda?</strong></h4>
                            <div className='flex-brip'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0">
                                    <img width={32} height={18} src="./icon-peru.png" />
                                    +51 14800534
                                </a>
                            </div>
                            <div className='flex-brip'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0">
                                    <img width={32} height={34} src="./icon-arg.svg" />
                                    +54 1152638334
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4><strong>Contactanos</strong></h4>
                            <a class="nombre-redes" href='mailto:info@briptravel.com'><HiMail className='icon-footer-text' /> info@briptravel.com</a>
                            <a class="nombre-redes" href='mailto:reservas@briptravel.com'><HiMail className='icon-footer-text' /> reservas@briptravel.com</a>
                        </div>
                        <div>
                            <h4><strong>Dirección</strong></h4>
                            <a class="nombre-redes" href='https://goo.gl/maps/qSoaKS16roGstpKR7'><FaMapMarkerAlt className='icon-footer-location' />Av. Corrientes 3447</a>
                            <a class="nombre-redes" href='https://goo.gl/maps/fEL4twrcZMTRnVUo6'><FaMapMarkerAlt className='icon-footer-location' />Av. Corrientes 2451</a>
                        </div>
                        <div>
                            <h4><strong>Nuestras Redes</strong></h4>
                            <a target="_blank" class="nombre-redes" href="https://www.facebook.com/bripargentina"><AiFillFacebook className='icon-footer-insta' />Facebook Briptravel</a>
                            <a target="_blank" class="nombre-redes" href="https://www.instagram.com/bripargentina/"><AiFillInstagram className='icon-footer-insta' />Instagram Brip Travel</a>
                        </div>
                    </div>
                </div>
                <div className="child-footer">
                    <p>©2023 Briptravel. Todos los derechos reservados. </p>
                </div>
            </footer>
        </>
    )
}
