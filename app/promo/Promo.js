
import './promo.css'

export default function Promo() {
    return (
        <>
            <div className='container-promo'>
                <div className='child-container-promo'>
                    <img width={350} height={250} className='brip-promo-img' src='./travel-1.jpg' />
                    <img width={350} height={250} className='brip-promo-img' src='./travel-2.webp' />
                    <img width={350} height={250} className='brip-promo-img' src='./travel-3.jpg' />
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
                        <button className='btn-call-agente'> Ver canales </button>
                    </div>
                </div>
            </div>
        </>
    )
}
