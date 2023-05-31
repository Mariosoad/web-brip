import styles from './page.module.css'

import Hero from './hero/hero'
import Promo from './promo/Promo'
import Nosotros from './nosotros/nosotros'

export default function Home() {
  return (
    <main className={styles.main}>

      <section id="Hero">
        <Hero />
      </section>

      <section id="Promos">
        <Promo />
      </section>

      <section id="Nosotros">
        <Nosotros />
      </section>

      <br></br>
      <br></br>
      <br></br>
    </main>
  )
}
