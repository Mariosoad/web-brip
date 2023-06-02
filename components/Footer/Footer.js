
import './footer.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className='container-footer'>
                <div className='container-newsletter'>
                    <p>Ofertas exclusivas por email</p>
                    <div className='child-container-newsletter'>
                        <input placeholder='Ingrese su email' />
                        <a className='btn-newsletter'>¡Recibir ofertas!</a>
                    </div>
                </div>
                <div className='child-container-footer'>
                    {/* <Image width="80" height="80" src="/logo-briptravel.png" alt="logo Briptravel" /> */}
                    <div className='container-info-footer'>
                        {/* <div>
                            <p>Tu agencia de viajes en todo el mundo.</p>
                        </div> */}
                        <div>
                            <h4><strong>¿Necesitas ayuda?</strong></h4>
                            <div className='flex-brip'><a href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0">
                                <img width={32} height={18} src="./icon-peru.png" />
                                +51 14800534</a>
                            </div>
                            <div className='flex-brip'> <img width={32} height={34} src="./icon-arg.svg" />
                                <a href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0">+54 1152638334</a>
                            </div>
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
