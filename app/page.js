import styles from './page.module.css'

import Hero from './hero/hero'
import Promo from './promo/Promo'

export default function Home() {
  return (
    <main className={styles.main}>

      <section id="Hero">
        <Hero />
      </section>

      <section id="Promos">
        <Promo />
      </section>

      <br></br>
      <br></br>
      <br></br>
    </main>
  )
}
