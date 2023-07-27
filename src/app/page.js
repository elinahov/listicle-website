'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Card from '../components/Card'

// JSX = Javascript XML

export default function Home() {
  const handleTitleClick = () => {
    alert('Hi there!')
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p onClick={handleTitleClick}>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Card title="Docs" subtitle="Find in-depth information about Next.js features and API." link="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" />

        <Card title="Learn" subtitle="Learn about Next.js in an interactive course with&nbsp;quizzes!" link="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" />

        <Card title="Templates" />

        <Card title="Deploy" />

      </div>
    </main>
  )
}
