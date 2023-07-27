import styles from './page.module.scss'
import Header from '@/components/Header'

// JSX = Javascript XML

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

    </main>
  )
}
