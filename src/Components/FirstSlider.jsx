import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './common.css'

const FirstSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='px-2'>
        <Carousel responsive={responsive} className='mt-2 mb-6 firstslider'>
          <div className='rounded-2xl mr-2'>
            <img className='h-70 cursor-pointer rounded-t-md' src="https://www.sephora.com/contentimages/2022-fragrance-q4-site-home-page-rwd-hero-banner-holiday-value-sets-75-under-us-01..jpg?imwidth=545" alt="" />
            <div className='bg-blue-300 h-24 rounded-b-md'>
              <h1 className='pl-4 text-xl font-semibold cursor-pointer'>Fragrance Gifts $75 & Under</h1>
              <p className='pl-4 cursor-pointer'>Sets for everyone on our list (including you)</p>
              <h1 className='pl-4 text-xm font-semibold mt-2 cursor-pointer'>SHOP NOW▸</h1>
            </div>
          </div>
          <div className='rounded-2xl mr-2'>
            <img className='h-70 cursor-pointer rounded-t-md' src="https://www.sephora.com/contentimages/2022-11-29-stock-up-on-dior-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us-can.jpg?imwidth=545" alt="" />
            <div className='bg-orange-200 h-24 rounded-b-md'>
              <h1 className='pl-4 text-xl font-semibold cursor-pointer'>Best of Dior</h1>
              <p className='pl-4 cursor-pointer'>Luxy beauty for everyone on your list</p>
              <h1 className='pl-4 text-xm font-semibold mt-2 cursor-pointer'>SHOP NOW▸</h1>
            </div>
          </div>
          <div className='rounded-2xl mr-2'>
            <img className='h-70 cursor-pointer rounded-t-md' src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-home-page-hero-banner-rwd-v1-product-us-release-1000x750.jpg?imwidth=545" alt="" />
            <div className='bg-[#01474f] h-24 cursor-pointer rounded-b-md'>
              <h1 className='pl-4 text-xl font-semibold text-white cursor-pointer'>Value Sets? Obsessed!</h1>
              <p className='pl-4 text-white cursor-pointer'>Limited edition packed full of items-fun to give,even better to get</p>
              <h1 className='pl-4 text-xm font-semibold mt-2 text-white cursor-pointer'>SHOP NOW▸</h1>
            </div>
          </div>
          <div className='rounded-2xl mr-2'>
            <img className='h-70 cursor-pointer rounded-t-md' src="https://www.sephora.com/contentimages/2022-10-29-slotting-just-arrived-v2-standard-site-responsive-home-page-hero-banner-4-product-US-CA-handoff_01.jpg?imwidth=545" alt="" />
            <div className='bg-[#59a19e] h-24 cursor-pointer rounded-b-md'>
              <h1 className='pl-4 text-xl font-semibold cursor-pointer'>In With the NEw</h1>
              <p className='pl-4 cursor-pointer'>the latest beauty from hottest brands</p>
              <h1 className='pl-4 text-xm font-semibold mt-2 cursor-pointer'>SHOP NOW▸</h1>
            </div>
          </div>
      </Carousel>
    </div>
  )
}

export default FirstSlider
