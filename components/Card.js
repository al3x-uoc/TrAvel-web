import Image from 'next/image'

function Card({img, title, description, buttonText}) {
    return (
        <section className='relative py-6 cursor-pointer'>
            
            <div className='relative h-96 min-w-[300px]'>
                <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
            </div>

            <div className="absolute top-32 left-12 text-white">
                <h3 className="text-5xl mb-6 w-128 underline">{title}</h3>
                <p className="text-2xl">{description}</p>

                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-16 ml-80">{buttonText}</button>
            </div>

        </section>
    )
}

export default Card
