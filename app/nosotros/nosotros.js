import './nosotros.css'

import Dropdown from './dropdown'

export default function Nosotros() {
    return (
        <>
            <div className='container-nosotros'>
                <div className='nosotros-tittle-section'>
                    <h2>Descubre el mundo con Briptravel</h2>
                    <p>Tenga en cuenta todas nuestras recomendaciones y tips a la hora viajar!</p>
                </div>
                <div className='child-container-nosotros'>
                    <Dropdown />
                    <div className='img-preg-frecuentes'>
                        <img width={350} height={420} src='./img-preg-frecuentes.jpg' />
                    </div>
                    {/* <div className='card-info-nosotros'>
                        <div>
                            <div>
                                <h3>¿Porque elegirnos?</h3>
                                <p> Contamos con una amplia experiencia en la industria del turismo. Nuestro equipo está compuesto
                                    por profesionales apasionados y expertos en destinos de todo el mundo.
                                    Sabemos que cada viajero es único, y es por eso que ofrecemos una amplia
                                    gama de opciones de viaje para adaptarnos a tus necesidades y preferencias. Ya sea que desees
                                    unas vacaciones de aventura, una escapada romántica, un crucero relajante o un viaje cultural,
                                    tenemos el itinerario perfecto para ti. Nuestro objetivo es que disfrutes al máximo de tu
                                    experiencia de viaje.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-info-nosotros'>
                        <div>
                            <div>
                                <h3>¿Porque comprar con nosotros?</h3>
                                <p> Tu satisfacción es nuestra prioridad. Nuestro equipo de atención al cliente está disponible
                                    para brindarte asistencia en cada etapa de tu viaje, desde la planificación hasta el regreso
                                    a casa. Estamos aquí para responder tus preguntas, resolver cualquier problema y asegurarnos
                                    de que tengas una experiencia de compra sin complicaciones. Estamos constantemente actualizando
                                    nuestras ofertas y promociones para brindarte las mejores oportunidades de ahorro.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-info-nosotros'>
                        <div>
                            <div>
                                <h3>¿Porque confiar en nosotros?</h3>
                                <p> Somos una agencia de viajes debidamente registrada y cumplimos con todas las regulaciones y
                                    estándares de la industria. Tu seguridad y bienestar son nuestra máxima prioridad.

                                    Nuestra reputación se basa en la satisfacción de nuestros clientes. Hemos recibido numerosos 
                                    testimonios positivos y comentarios elogiosos de viajeros
                                    satisfechos que han confiado en nosotros para planificar sus vacaciones. Estamos orgullosos
                                    de contar con una base de clientes leales que respaldan la calidad de nuestros servicios.
                                </p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}
