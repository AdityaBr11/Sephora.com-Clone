import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './common.css'

const Fifth = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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
    <div className='w-4/5 m-auto bg-white'>
    <h1 className='text-2xl font-semibold flex justify-between mt-4 items-center'>Beauty Offers (6) <span className='text-sm hover:underline mr-4 text-blue-500 cursor-pointer'>View all</span> </h1>
      <Carousel responsive={responsive} className='mt-4'>
            <div className='shadow-2xl rounded-lg overflow-hidden mr-3'>
                <img className='' src="https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-fragrance-q4-site-beauty-offers-banner-1000x750-smgm-us-khols.jpg?imwidth=480" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-ls font-bold'>Spend More, Get More Fragrance</p>
                    <p className='text-md'>Get 1 mini with $45 product purchase, 2 minis with $75 product purchase, or 3 minis with $105 product purchase.*</p>
                    <p className='text-xs mt-1 leading-4 '>Beauty Insider members only. <br /> Online only <br /> *Exclusions/terms apply. While supplies last.</p>
                    <button className='mt-4 border-2 border-black text-black rounded-full px-6 py-1 text-xs font-semibold btn'>Apply</button>
                </div>
            </div>
            <div className='shadow-2xl rounded-lg overflow-hidden mr-3'>
                <img className='' src="https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/percent-off-basket-app-content-card-promo.png?imwidth=480" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-ls font-bold'>Spend More, Get More Fragrance</p>
                    <p className='text-md'>Get 1 mini with $45 product purchase, 2 minis with $75 product purchase, or 3 minis with $105 product purchase.*</p>
                    <p className='text-xs mt-1 leading-4 '>Beauty Insider members only. <br /> Online only <br /> *Exclusions/terms apply. While supplies last.</p>
                    <button className='mt-4 border-2 border-black text-black rounded-full px-6 py-1 text-xs font-semibold btn'>Apply</button>
                </div>
            </div>
            <div className='shadow-2xl rounded-lg overflow-hidden mr-3'>
                <img className='' src="https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-10-24-slotting-promo-app-beauty-offers-banner-STRONGERHAIR-us-handoff.jpg?imwidth=480" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-ls font-bold'>Choose 2 Complimentary Hair-Care Trial Sizes</p>
                    <p className='text-md'>Pick 2 trial sizes for stronger hair from Olaplex, Virtue, Briogeo, or Christohpe Robin.*</p>
                    <p className='text-xs mt-1 leading-4 '>Complimentary with $35 purchase.*
Beauty Insider members only. <br /> Online only <br /> *Exclusions/terms apply. While supplies last.</p>
                    <button className='mt-4 border-2 border-black text-black rounded-full px-6 py-1 text-xs font-semibold btn'>Apply</button>
                </div>
            </div>
            <div className='shadow-2xl rounded-lg overflow-hidden mr-3'>
                <img className='' src="https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-10-27-black-owned-brands-site-desktop-mobile-app-beauty-offers-page-banner-en-us.jpg?imwidth=480" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-ls font-bold'>Free Danessa Myricks Beauty Trial Size</p>
                    <p className='text-md'>Cut back on shine with the bestselling Yummy Skin Blurring Balm Powder. *</p>
                    <p className='text-xs mt-1 leading-4 '>Free with $25 purchase.*

Beauty Insider members only. <br /> Online only <br /> *Exclusions/terms apply. While supplies last.</p>
                    <button className='btn mt-9 border-2 border-black text-black rounded-full px-6 py-1 text-xs font-semibold'>Apply</button>
                </div>
            </div>
            <div className='shadow-2xl rounded-lg overflow-hidden mr-3'>
                <img className='' src="https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-october-smgm-site-desktop-mobile-app-beauty-offers-page-banner-1000x750-us.jpg?imwidth=480" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-ls font-bold'>Spend More, Get More </p>
                    <p className='text-md'>Pick up to six free trial sizes from Pureology, COLOR WOW, shu uemura, and more!*</p>
                    <p className='text-xs mt-1 leading-4 '>Free with $100 purchase.* 

Beauty Insider members only. <br /> Online only <br /> *Exclusions/terms apply. While supplies last.</p>
                    <button className='btn mt-9 border-2 border-black text-black rounded-full px-6 py-1 text-xs font-semibold'>Apply</button>
                </div>
            </div>
            <div className='shadow-2xl rounded-lg overflow-hidden '>
                <img className='' src="https://www.sephora.com/contentimages/promo/beautyoffers/2022/September/2022-09-29-slotting-promo-app-beauty-offers-banner-SKINLUXE-us-handoff.jpg?imwidth=480" alt="" />
                <div className='p-3 leading-tight'>
                    <p className='text-ls font-bold'>Choose a Complimentary Skincare Trial Size </p>
                    <p className='text-md'>Pick a luxe trial size from Lancôme, Guerlain, SK-II, Augustinus Bader, or La Mer..*</p>
                    <p className='text-xs mt-1 leading-4 '>Complimentary with $55 purchase.*

Beauty Insider members only. <br /> Online only <br /> *Exclusions/terms apply. While supplies last.</p>
                    <button className='mt-6 border-2 border-black text-black rounded-full px-6 py-1 text-xs font-semibold btn'>Apply</button>
                </div>
            </div>
      </Carousel>

    </div>
  )
}

export default Fifth;
