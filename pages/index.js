import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TrAvel - Home</title>
        <link rel="icon" href="/travel.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6 pb-4'>
          <h2 className='text-4xl font-semibold pb-5'>Promotions</h2>
          <Card 
            img='https://images.pexels.com/photos/5625008/pexels-photo-5625008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            title='The Greatest Promotions'
            description='30% Promotion with Black Friday'
            buttonText='Learn more'
          />
        </section>
      </main>
      

      <Footer />
    </div>
  )
}
