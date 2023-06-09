import Link from 'next/link'
import './promo.css'

export default function Promo() {
    return (
        <>
            <div className='container-promo'>
                <div className='container-banners'>
                    <div className='promo-tittle-section'>
                        <h2>Viaja sin límites y disfruta sin preocupaciones</h2>
                    </div>
                    <div className='child-container-promo'>
                        <Link href="#">
                            <img width={300} height={280} className='brip-promo-img' src='./promo-brip-1.jpg' />
                        </Link>
                        <Link href="#">
                            <img width={400} height={220} className='brip-promo-img' src='./promo-brip-1.jpg' />
                        </Link>
                        <Link href="#">
                            <img width={400} height={220} className='brip-promo-img' src='./promo-brip-1.jpg' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
