import './nosotros.css'

import Dropdown from './dropdown'

export default function Nosotros() {
    return (
        <>
            <div className='container-nosotros'>
                <div className='nosotros-tittle-section'>
                    <h2>Descubre el mundo con <span>Briptravel</span></h2>
                    <p>Tenga en cuenta todas nuestras recomendaciones y tips a la hora viajar!</p>
                </div>
                <div className='child-container-nosotros'>
                    <div className='img-preg-frecuentes'>
                        <img width={350} height={420} src='./img-preg-frecuentes.jpg' />
                    </div>
                    <Dropdown />
                </div>
            </div>
        </>
    )
}
