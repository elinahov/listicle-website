import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Button from '@/components/Button'
import React from 'react'

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

  const highlights = [
    {
      title: '500+',
      subtitle: 'Listings',
      icon: '/phone.png',
    },
    {
      title: '100+',
      subtitle: 'Users',
      icon: '/user.png',
    },
    {
      title: '30+',
      subtitle: 'Servers',
      icon: '/server.png',
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
          <Image
            className={styles.image}
            src='/illustration.png'
            alt="Banner Illustration"
            fill
          />
        </div>
      </div>

      <div className={styles.highlights}>
        {highlights.map((highlight, index) => (
          <React.Fragment key={highlight.title}>
            <div className={styles.highlight}>
              <span className={styles.iconContainer}>
                <Image src={highlight.icon} width={24} height={24} className={styles.icon} alt={highlight.subtitle} />
              </span>

              <span>
                <h5>{highlight.title}</h5>
                <p>{highlight.subtitle}</p>
              </span>
            </div>
            
            {index < highlights.length - 1 && (
              <div className={styles.wall} />
            )}
          </React.Fragment>
        ))}
      </div>

    </main>
  )
}
