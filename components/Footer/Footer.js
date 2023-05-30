
import './footer.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className='container-footer'>
                <div className='container-newsletter'>
                    <p>Ofertas exclusivas por email</p>
                    <input placeholder='Ingrese su email' />
                    <button className='btn-newsletter'>¡Recibir ofertas!</button>
                </div>
                <div className='child-container-footer'>
                    <Image width="80" height="80" src="/logo-briptravel.png" alt="logo Briptravel" />
                    <div className='container-info-footer'>
                        {/* <div>
                            <p>Tu agencia de viajes en todo el mundo.</p>
                        </div> */}
                        <div>
                            <h4><strong>¿Necesitas ayuda?</strong></h4>
                            <div className='flex-brip'> <img width={32} height={18} src="./icon-peru.png" /> +51 14800534</div>
                            <div className='flex-brip'> <img width={32} height={34} src="./icon-arg.svg" /> +54 1152638334</div>
                        </div>
                        <div>
                            <h4><strong>Contactanos</strong></h4>
                            <p><i class="fa-regular fa-envelope"></i>info@briptravel.com</p>
                            <p>reservas@briptravel.com</p>
                        </div>
                        <div>
                            <h4><strong>Dirección</strong></h4>
                            <p>122 y 53 bis</p>
                            <p>44 y 56 Nº14</p>
                            <p>2 y 56</p>
                        </div>
                        <div>
                            <h4><strong>Redes sociales</strong></h4>
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