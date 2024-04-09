import { Link } from 'react-router-dom';
import hero1 from '../images/hero1.webp';
import hero2 from '../images/hero2.webp';
import hero3 from '../images/hero3.webp';
import hero4 from '../images/hero4.webp';

const carouselImages = [hero4, hero1, hero3, hero2];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl capitalize'>
          we are changing the way people shop for luxurious furniture
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Elevate your daily life with our curated selection of high-quality products. View the exquisite home decor on offer, we're redefining the way you 
          experience luxury in your everyday routines.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img src={image} className='rounded-box h-full w-80 object-cover'/>
            </div>
        )})}
      </div>
    </div>
  )
}

export default Hero