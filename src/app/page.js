'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'
import { setupHttp } from '@/http'
import { AUTH_TOKEN } from '@/http/auth'

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

export default function Home() {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const isAuthenticated = !!authToken;
  const router = useRouter()

  useEffect(() => {
    setupHttp(authToken);

    if (isAuthenticated) {
      router.push('/home')
    }
  }, [])

  return (
    <div className={styles.main}>
      <Header />

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
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className={styles.highlights} id="about">
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

      <div className={styles.worldMap}>
        <h2>Our awesome apps <br /> are loved worldwide</h2>
        <p>We care about your users and we always pay huge attention to create <br /> a product that people <b>love</b> to use every day.</p>

        <div className={styles.map}>
          <Image style={{objectFit: 'contain'}} src="/map.png" fill sizes='100vw' priority={false} alt="World map" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
