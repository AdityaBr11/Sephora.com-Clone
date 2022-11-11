import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './common.css'



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
    <div className='w-4/5 m-auto'>
      <h1 className='text-2xl font-semibold'>Chosen For You</h1>
      <Carousel responsive={responsive} className='mt-4 py-4 main'>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2084408-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Too Faced</p>
                    <p className='text-md'>Born This Way super Coverage Multi-Use...</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2555811-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>Easy Bake Loose Baking & Setting .</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Rare Beauty Selana Go.</p>
                    <p className='text-md'>Soft Pinch liquid blush and beauty</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2452753-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>Easy Bake Loose Baking & Setting.</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>NARS</p>
                    <p className='text-md'>Radient Creamy Concealer</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2606085-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Charlotty Tibury</p>
                    <p className='text-md'>Airbrush Flawless Finish Setting Powder</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s870618-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Laura Mercier</p>
                    <p className='text-md'>Translucent Loose Setting Powder</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2577872-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>#FauxFilter Luminious Matte Buildable</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Rare Beauty by Salena..</p>
                    <p className='text-md'>Positive Light liquid Luminizer Highliter</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2589927-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Fancy Beauty By Rihanna</p>
                    <p className='text-md'>Match Stix Matte Contour Skinstick </p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2031011-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>NARS</p>
                    <p className='text-md'>Natural Radient Lower Foundation</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3'>
                <img src="https://www.sephora.com/productimages/sku/s2520419-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-20 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Benifit Cosmetics</p>
                    <p className='text-md'>Holla Bronzer</p>
                </div>
            </div>
      </Carousel>

      

      <h1 className='text-2xl font-semibold flex justify-between mt-4 items-center'>Just Dropped <span className='text-sm hover:underline mr-4 text-blue-500 cursor-pointer'>Show more</span> </h1>
      
      <Carousel responsive={responsive} className='mt-4 mb-6 py-4 mid h-auto '>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2520419-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Benifit Cosmetics</p>
                    <p className='text-md'>Holla Bronzer</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2619005-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>NARS</p>
                    <p className='text-md'>Rising start cheeek Platte</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2579878-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>SEPHORA COLLECTION</p>
                    <p className='text-md'>Wish you Masks Wishes</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2617744-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>HUDA BEAUTY</p>
                    <p className='text-md'>Empowered Eyeshadow Palette</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2594364-main-zoom.jpg?imwidth=166" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>MAKUP MARIO</p>
                    <p className='text-md'>Mario's Lip Lift™ Kit</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2596039-main-zoom.jpg?imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className=' absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Hourglass</p>
                    <p className='text-md'>Ambient Lighting Edit Unlocked Face Palette</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2608180-main-zoom.jpg?imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>ONE/SIZE by Patrick Starrr</p>
                    <p className='text-md'>On 'Til Dawn Mattifying Waterproof Setting Spray Duo Set</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2619104-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className=' absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>OLEHENRIKSEN</p>
                    <p className='text-md'>Find Your Glow Brightening Skincare Set</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2597565-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className=' absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>HAUS LABS BY LADY GAGA</p>
                    <p className='text-md'>Bio-Blurring Talc-Free Loose Setting Powder</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2625812-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className=' absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>Westman Atelier</p>
                    <p className='text-md'>Squeaky and Cheeky Duo Lip and Cheek Holiday Gift Set</p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2619179-main-zoom.jpg?imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className='absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>La Mer</p>
                    <p className='text-md'>The Moisture Radiance Collection </p>
                </div>
            </div>
            <div className=' border border-gray-300 h-full mr-3 relative'>
                <img src="https://www.sephora.com/productimages/sku/s2618486-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=332" alt="" />
                <div className='p-3 leading-tight'>
                <p className=' absolute bottom-28 bg-black text-white w-5/6 m-auto text-center opacity-40 p-1 hidden look'>Quicklook</p>
                    <p className='text-xs font-bold'>amika</p>
                    <p className='text-md'>Perk Up Plus Extended Clean Dry Shampoo</p>
                </div>
            </div>
      </Carousel>


    </div>
  )
}

export default ForuSlider
