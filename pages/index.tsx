import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website bán mỹ phẩm</title>
        <meta name="description" content="Thông tin website bán mỹ phẩm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       Main
      </main>
      <Footer />
    </div>
  )
}
export default Home
