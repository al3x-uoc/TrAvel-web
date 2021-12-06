import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'

function ApartmentInfo() {
    return (
        <div className='relative py-6 mx-20'>
            <h2 className="text-3xl font-semibold mt-2 mb-6">London Studio Apartments</h2>
            <div className='relative min-h-[200px] min-w-[200px] sm:min-h-[300px] sm:min-w-[300px] md:min-h-[400px] md:min-w-[400px] lg:min-h-[500px] lg:min-w-[500px] xl:min-h-[600px] xl:min-w-[600px] 2xl:min-h-[700px] 2xl:min-w-[700px]'>
                <Image className='rounded-2xl' src='https://links.papareact.com/uz7' layout='fill' objectFit='cover'/>
            </div>

            <div className='border-2 rounded-2xl mt-5 mx-40 pb-5'>

                <div className='flex justify-between mt-3 ml-10 mr-16'>
                    <p className='flex items-center text-2xl font-semibold'>
                        <StarIcon className='h-10 text-yellow-300'/>
                        3.8
                    </p>

                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>$50 / night</p>
                        <p className='text-right font-extralight'>$250 total</p>
                    </div>
                </div>

                <div className='pt-6 px-5 ml-10'>
                    <div className='flex space-x-2'>
                        <h3 className='font-semibold'>Description:</h3>
                        <p>Private room in center of London.</p>
                    </div>
                </div>

                <div className='pt-6 px-5'>
                    <div className='flex space-x-2 ml-10'>
                        <h3 className='font-semibold'>Information:</h3>
                        <p>4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine.</p>
                    </div>
                </div>

                <p className='button mt-10 mx-10 2xl:mr-[1250px] mb-5 text-center'>Valorations</p>
                <button className='text-white bg-blue-700 px-10 py-4 shadow-md rounded-full font-bold my-3 2xl:ml-[1200px] hover:shadow-xl active:scale-90 transition duration-150'>RESERVE NOW</button>

            </div>
            
            
        </div>
    )
}

export default ApartmentInfo
