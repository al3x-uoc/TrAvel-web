import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]'>
            <Image src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" layout='fill' objectFit='cover'/>
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg text-white'>Not sure where to go? Perfect.</p>
                <button className='text-blue-700 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Promotions</button>
            </div>
        </div>
    )
}

export default Banner
