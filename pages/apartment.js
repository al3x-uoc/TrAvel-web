import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApartmentInfo from '../components/ApartmentInfo'

function Apartment() {
    return (
        <div className='space-y-5'>
            <Head>
                <title>TrAvel - Apartment</title>
                <link rel="icon" href="/travel.ico" />
            </Head>

            <Header />

            <ApartmentInfo />

            <Footer />
        </div>
    )
}

export default Apartment