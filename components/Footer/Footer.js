
import './footer.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className='container-footer'>
                <div className='up-footer'>
                    <p>Ofertas exclusivas por email</p>
                    <div>
                        <input placeholder='Ingrese su email' />
                        <button className='btn-newsletter'>¡Recibir ofertas!</button>
                    </div>
                </div>
                <div className='child-container-footer'>
                    <Image width="80" height="80" src="/logo-briptravel.png" alt="logo Briptravel" />
                    <div className='container-info-footer'>
                        {/* <div>
                            <p>Tu agencia de viajes en todo el mundo.</p>
                        </div> */}
                        <div>
                            <p><strong>¿Necesitas ayuda?</strong></p>
                            <p>+51 14800534</p>
                            <p>+54 1152638334</p>
                        </div>
                        <div>
                            <p><strong>Contactanos</strong></p>
                            <p>info@briptravel.com</p>
                            <p>reservas@briptravel.com</p>
                        </div>
                        <div>
                            <p><strong>Dirección</strong></p>
                            <p>122 y 53 bis</p>
                            <p>44 y 56 Nº14</p>
                            <p>2 y 56</p>
                        </div>
                        <div>
                            <p><strong>Redes sociales</strong></p>
                            <p>Facebook Briptravel</p>
                            <p>Instagram Briptravel</p>
                        </div>
                    </div>
                    <div className="child-footer">
                        <p>©2023 Briptravel. Todos los derechos reservados. </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
