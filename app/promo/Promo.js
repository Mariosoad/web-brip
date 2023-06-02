import Link from 'next/link'
import './promo.css'

export default function Promo() {
    return (
        <>
            <div className='container-promo'>
                <div className='nosotros-tittle-section'>
                    <h2>Viaja sin límites y disfruta sin preocupaciones</h2>
                </div>
                <div className='child-container-promo'>
                    <Link href="#">
                        <img width={400} height={220} className='brip-promo-img' src='./promo-brip-1.jpg' />
                    </Link>
                    <Link href="#">
                        <img width={400} height={220} className='brip-promo-img' src='./promo-brip-1.jpg' />
                    </Link>
                    <Link href="#">
                        <img width={400} height={220} className='brip-promo-img' src='./promo-brip-1.jpg' />
                    </Link>
                </div>
                <div className='container-call-agente'>
                    <div className='child-container-call-agente'>
                        <div>
                            <lord-icon style={{ width: "70px", height: "70px" }} trigger="loop" src="./call-contacto.json"> </lord-icon>
                            <div>
                                <h3>Agente Briptravel, ¡Comprá con atención personalizada!</h3>
                                <p>Accede a nuestros canales y recibe una atención exclusiva para planificar tu viaje </p>
                            </div>
                        </div>
                        <Link className='btn-call-agente' href="#">Ver canales</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
