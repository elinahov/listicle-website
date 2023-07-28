import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Button from '@/components/Button'

export default function Home() {
  const headerActions = [
    {
      title: 'About'
    },
    {
      title: 'Features'
    },
    {
      title: 'Pricing'
    },
    {
      title: 'Testimonials'
    },
  ]
  return (
    <main className={styles.main}>
      <Header actions={headerActions} />

      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>
            Find <b>all you need</b> in <b>Listicle</b> platform
          </h1>

          <p>
            Listings from different fields - from furnitures to books and electronics. Sign up to see all the listings and find the best match for you.
          </p>

          <Button>
            Get Started
          </Button>
        </div>

        <div className={styles.bannerImage}>
          <Image className={styles.image} src='/illustration.png' alt="Banner Illustration" fill />
        </div>
      </div>

    </main>
  )
}
