import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { useAuth } from '../hooks/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { data, error, register } = useAuth();
  if(error) return <div>fail to load</div>;
  if(!data) return <div>Loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>Website bán mỹ phẩm</title>
        <meta name="description" content="Thông tin website bán mỹ phẩm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       Main
      </main>
      <Footer />
      {data.map((user,index) => <div key={index}>{user.email}</div>)}
      <button onClick={() => register()}>Register</button>
    </div>
  )
}
export default Home
