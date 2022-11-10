import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const ForuSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div className='w-4/5 m-auto h-96 mb-32'>
      <h1 className='text-2xl font-semibold'>Chosen For You</h1>
      <Carousel responsive={responsive} className='mt-8'>
            <div className='shadow-xl h-70 mr-3 p-2'>
                <img src="https://www.sephora.com/productimages/sku/s2084408-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Too Faced</p>
                    <p className='text-md'>Born This Way super Coverage Multi-Use...</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2555811-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>Easy Bake Loose Baking & Setting Powder .</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Rare Beauty Selana Go.</p>
                    <p className='text-md'>Soft Pinch liquid blush and beauty</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2452753-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>Easy Bake Loose Baking & Setting Powder .</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>NARS</p>
                    <p className='text-md'>Radient Creamy Concealer</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2606085-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Charlotty Tibury</p>
                    <p className='text-md'>Airbrush Flawless Finish Setting Powder</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s870618-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Laura Mercier</p>
                    <p className='text-md'>Translucent Loose Setting Powder</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2577872-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>#FauxFilter Luminious Matte Buildable</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Rare Beauty by Salena..</p>
                    <p className='text-md'>Positive Light liquid Luminizer Highliter</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2589927-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Fancy Beauty By Rihanna</p>
                    <p className='text-md'>Match Stix Matte Contour Skinstick </p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2031011-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>NARS</p>
                    <p className='text-md'>Natural Radient Lower Foundation</p>
                </div>
            </div>
            <div className='shadow-xl h-70 mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2520419-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-xs font-bold'>Benifit Cosmetics</p>
                    <p className='text-md'>Holla Bronzer</p>
                </div>
            </div>
      </Carousel>

    </div>
  )
}

export default ForuSlider
