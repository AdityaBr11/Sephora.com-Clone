import React from 'react'
import ButtomPart from './ButtomPart'
import FirstSlider from './FirstSlider'
import ForuSlider from './ForuSlider'
import Navbar from './Navbar'
import Fifth from './Fifth'
import './common.css'

const Home = () => {
  return (
    <div>
      <FirstSlider/>
      <ForuSlider/>
    <Fifth/>
      
      {/* poster parts */}
      <div className="flex h-60 w-4/5 mt-20  m-auto mb-8 gap-10">
        <div className=' bg-[#fecfc5] h-auto w-1/3 leading-4 rounded-lg overflow-hidden pos1'>
          <div className='px-4 py-2'>
            <h1 className='text-lg font-bold'>Charlotte Tilbury's Greatest Hits</h1>
            <p>Must-have makeup from a beauty icon. </p>
            <p className='text-md font-bold mt-4'>SHOP NOW▸</p>
          </div>
          <img className='mt-6' src="https://www.sephora.com/contentimages/2022-11-9-charlotte-tilbury-holiday-collection-site-desktop-mweb-home-page-rwd-marketing-banner-bestsellers-800x256-en-us-can.jpg?imwidth=800" alt="" />
        </div>

        <div className='bg-[#ffa8cb] h-auto w-1/3 leading-4 rounded-lg overflow-hidden pos1'>
        <div className='px-4 py-2'>
            <h1 className='text-lg font-bold'>New Oribe Lust Gift Set</h1>
            <p>Luxe hair for major hydration.  </p>
            <p className='text-md font-bold mt-5'>SHOP NOW▸</p>
          </div>
          <img className='mt-6' src="https://www.sephora.com/contentimages/2022-11-8-oribe-holiday-sets-site-desktop-mweb-home-page-rwd-marketing-banner-800x256-en-us.jpg?imwidth=800" alt="" />
        </div>

        <div className='bg-[#acdcf2] h-auto w-1/3 leading-4 rounded-lg overflow-hidden pos1'>
        <div className='px-4 py-2'>
            <h1 className='text-lg font-bold'>Gift Sets under $15</h1>
            <p>Prep for the holidays with must-have presents for everyone on your list. </p>
            <p className='text-md font-bold mt-4'>SHOP NOW▸</p>
          </div>
          <img className='mt-3' src="https://www.sephora.com/contentimages/2022-11-1-sc-sku-site-desktop-mweb-home-page-rwd-marketing-banner-launch-3-800x256-en-us-can.jpg?imwidth=800" alt="" />

        </div>
      </div>

      {/* Categories section */}
      <div className="flex w-4/5 h-60 m-auto justify-between border-b-2 border-t-2 border-gray-100 mt-20 pt-14 catSec">
        <div className="">
          <h1 className='text-xl font-bold'>Featured Categories</h1>
          <p className='text-sm'>Shop what's popular now.</p>
        </div>
        <div className="flex gap-6">
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2  rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Gifts & Value <br/> Sets</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/gifts%2032@3x.png?imwidth=106" alt="" />
          </div>

          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2  rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Gifts & Value <br/> Sets</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/luxury_beauty.svg" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2 rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Makeup Under <br/>$25</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/homepage/100422/Homepage/RWD/under25%2032@3x.jpg?imwidth=106" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2  rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Moisturizers <br/> Sets</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2 rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Hair Styling &<br/>treatments</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=106" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2 rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Perfums<br/> Sets</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=106" alt="" />
          </div>
        </div>
      </div>

      {/* guidence */}
      <div className="flex w-4/5 h-48 m-auto justify-between border-b-2 border-gray-100 mt-14 catSec">
        <div className="">
          <h1 className='text-xl font-bold'>Need a Little Guidance?</h1>
          <p className='text-sm'>Check out our <span className='text-blue-400 hover:underline'>quizzes and buying guides.</span> </p>
        </div>
        <div className="flex gap-6">
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2  rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Gifts Quizs</p>
            <img className='h-14 flex ml-14 mt-8 ' src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/gift_finder.svg" alt="" />
          </div>

          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2  rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Clean Beauty</p>
            <img className='h-14 flex ml-14 mt-8 ' src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2 rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Foundation <br/>Quiz</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_guide.svg" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2  rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Skin Care <br/> Routing </p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2 rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Shiny Hair Guide<br/>Guide</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_healthy%20scalp%20guide_us_ca_rwd_slice.png?imwidth=106" alt="" />
          </div>
          <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className='bg-white h-32 w-1/6 px-1 py-2 rounded-lg overflow-hidden ct'>
            <p className='text-sm font-semibold'>Clinical Skin<br/> care</p>
            <img className='h-14 flex ml-14 mt-4 ' src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg" alt="" />
          </div>
        </div>
      </div>


      {/* poster2 */}
      <div className="flex h-60 w-4/5 mt-10  m-auto mb-8 gap-10">
        <div className=' bg-white h-auto w-1/3 leading-4 rounded-lg overflow-hidden pos1'>
          <div className='px-4 py-2'>
            <h1 className='text-lg font-bold'>Our Commitment to Diversity, Equity & Inclusion</h1>
            <p className='text-sm font-bold mt-4'>LEARN MORE▸</p>
          </div>
          <img className='mt-3' src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=800" alt="" />
        </div>

        <div className='bg-[#16603b] h-auto w-1/3 leading-4 rounded-lg overflow-hidden pos1'>
        <div className='px-4 py-2'>
            <h1 className='text-lg font-bold'>Get Your Gifts in Time</h1>
            <p>Fast and easy options for stress-free holiday shopping. </p>
            <p className='text-sm font-bold mt-5'>LEARN MORE▸</p>
          </div>
          <img className='mt-3' src="https://www.sephora.com/contentimages/2022-holiday-launch-site-desktop-mobile-home-page-rwd-marketing-banner-bottom-banner-ease-and-convenience-800x256-us-can.jpg?imwidth=800" alt="" />
        </div>

        <div className='bg-[#c6a886] h-auto w-1/3 leading-4 rounded-lg overflow-hidden pos1'>
        <div className='px-4 py-2'>
            <h1 className='text-lg font-bold'>Clean + Planet Positive</h1>
            <p>Brands on a mission to change your skin and the earth. </p>
            <p className='text-sm font-bold mt-4'>LEARN MORE▸</p>
          </div>
          <img className='mt-3' src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-clean-planet-positive-desktop-mobile-us-ca-slice.jpeg?imwidth=800" alt="" />

        </div>

      </div>

    </div>
  )
}

export default Home
