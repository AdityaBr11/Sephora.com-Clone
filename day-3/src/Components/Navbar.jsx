import React from 'react'
import {BsSearch,BsHeartFill,BsBasket3Fill} from 'react-icons/bs'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {MdGroups,MdInsertComment} from 'react-icons/md'


const Navbar = () => {
  return (
    <div>
      <div className='bg-blue-200 h-14 flex justify-center items-center'>
        <p className='text-sm font-medium cursor-pointer'>Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply.† 
        <span className='text-md font-bold'>LEARN MORE▸</span></p>

      </div>
      {/* logo part */}
      <div className='h-24   flex items-center justify-center'>
       <div className="flex m-auto gap-6 items-center">
       <img className='cursor-pointer' src="https://i.postimg.cc/ZY9NdkKx/brandlogo.png" alt="SEPHORA" />
       <div className='flex justify-center items-center bg-gray-100 gap-2 py-1 px-5 rounded-full'>
          <p> <BsSearch/> </p>
          <input className='w-96 py-1 outline-none bg-gray-100' type="text" placeholder='Search' />
       </div>

       <div className='flex justify-center items-center gap-2 border-r px-2'>
        <p className='text-xl cursor-pointer'><SiHomeassistantcommunitystore/> </p>
        <div className=' leading-4 text-sm font-medium cursor-pointer' >
          <p>Store & Services</p>
          <p className='text-gray-600 text-xs font-normal'>Choose your state</p>
        </div>
       </div>

       <div className='flex justify-center items-center gap-2 border-r px-2 cursor-pointer'>
        <p className='text-3xl '><MdGroups/> </p>
        <div className=' leading-4 text-sm font-medium'>
          <p>Community</p>
        </div>
       </div>

       <div className='flex justify-center items-center gap-2 cursor-pointer'>
        <img src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="" />
        <div className=' leading-4 text-sm font-medium'>
          <p>Sign in</p>
          <p className='text-gray-600 text-xs font-normal'>For Free Shiping</p>
        </div>
       </div>

       <p className='text-2xl cursor-pointer'><MdInsertComment/></p>
       <p className='text-2xl cursor-pointer'><BsHeartFill/></p>
       <p className='text-2xl relative bottom-1 cursor-pointer'><BsBasket3Fill/></p>
       </div>

      </div>
      <div className="h-10 bg-black flex justify-between px-36 py-4 text-white items-center">
        <p>New</p>
        <p> Brands</p>
        <p> Makeup</p>
        <p> Skincare</p>
        <p> Hair</p>
        <p> Fragrance</p>
        <p> Tools & Brushes</p>
        <p> Bath & Body</p>
        <p> Mini Size</p>
        <p className='-m-6'> <span className='relative z-10 bottom-3 left-4'>🌟</span> Gifts <span className='relative z-10 top-3 right-2'>✨</span> </p>
        <p>Beauty Under $20</p>
        <p>Sale & Offers</p>
      </div>
      <div className='h-10 bg-gray-200 flex items-center justify-center font-semibold'>
        <p className='cursor-pointer'>Shiping is delayed due to high demand.Need it sooner? Buy online,Pick Up in Store or get Same-day Delivery▸</p>
      </div>
    </div>
  )
}

export default Navbar;
