import './info.css'

export default function Info() {
    return (
        <>
            <div className='container-info'>
                <div className='info-tittle-section'>
                    <h2>Conectando personas <br></br>con destinos extraordinarios</h2>
                    <p>Permítenos llevarte a un viaje lleno de descubrimientos, aventuras y momentos memorables.</p>
                </div>
                <div className='child-container-info'>
                    <div className='container-list-tips'>
                        <div>
                            <h3>Experiencias turísticas y tours personalizados.</h3>
                            <p>Nuestros tours son cuidadosamente diseñados para llevarte a destinos asombrosos, donde podrás sumergirte en la cultura, la historia y la belleza de cada lugar. Ya sea que estés buscando un escape relajante en una playa paradisíaca, una aventura llena de emociones en la naturaleza o una inmersión en la riqueza cultural de una ciudad vibrante, tenemos el tour perfecto para ti.</p>
                        </div>
                        <div>
                            <h3>Nuestro equipo de expertos en viajes a tu servicio.</h3>
                            <p>Nuestros agentes están altamente capacitados y tienen un amplio conocimiento de los destinos que ofrecemos. Están listos para brindarte asesoramiento y recomendaciones para que tu viaje sea verdaderamente único y memorable.</p>
                        </div>
                        <div>
                            <h3>Sumérgete en una aventura inolvidable con <span>Briptravel</span></h3>
                            <p>Estamos emocionados de ser parte de tu próxima aventura y ayudarte a crear recuerdos que durarán toda la vida. En Briptravel, creemos que el mundo está lleno de tesoros por descubrir, y estamos aquí para guiarte en cada paso del camino. ¡Empecemos a planificar tu próximo viaje juntos!</p>
                        </div>
                    </div>
                    <div className='img-info-preg-frecuentes'>
                        <img width={350} height={420} src='./maleta-brip.png' />
                    </div>
                </div>
            </div>
        </>
    )
}
