import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>UTM Resource Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h6 className={styles.title}>
          UTM Resource Generator
        </h6>

        <p className={styles.description}>
          Customize and save time {' '}
          <code className={styles.code}>UTM's made easy</code>
        </p>
        <Form />
      </main>

      <footer className={styles.footer}>
        Made with {' '} <span style={{ fontSize: '24px', padding: '5px' }}>♥️</span> from India
      </footer>
    </div>
  )
}
