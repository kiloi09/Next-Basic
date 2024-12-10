import mapsImg from '@/images/map.jpg'
import Image from 'next/image'
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';


type ParamsType = {
    params: { id: string }
}

const page = async ({ params }:ParamsType) => {

    const { id } = await params

  return (
    <div>
        <h1 className="text-4-xl">ID: {id}</h1>
        <section className='flex gap-x-4 mt-4'>

            {/* local image */}
            <div>
                <Image 
                    src={mapsImg} 
                    priority
                    alt='maps' 
                    width={192} 
                    height={192} 
                    className='w-48 h-48 object-cover rounded'/>
                <h2>local image</h2>
            </div>

            {/* remote image */}
            <div>
                <Image
                    src={url}
                    alt='tour'
                    width={192}
                    height={192}
                    priority
                    className='w-48 h-48 object-cover rounded'
                />
                <h2>remote image</h2>
            </div>

        </section>
    </div>
  )
}

export default page