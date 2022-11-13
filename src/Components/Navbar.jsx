import React from 'react'
import {BsSearch,BsHeartFill,BsBasket3Fill} from 'react-icons/bs'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {MdGroups,MdInsertComment} from 'react-icons/md'
import { Skeleton, SkeletonText } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [loading,setLoading]=React.useState(true);

  React.useEffect(()=>{
    const t=setTimeout(()=>{
      setLoading(false)
    },2000)

    return()=>{
      clearTimeout(t)
    }
  },[])
  
  return (
    <div>
      {loading ? (
        <Box className='w-4/5 m-auto shadow-none h-10 p-4' padding='6' boxShadow='' bg='white'>
        <SkeletonText mt='2' noOfLines={2} spacing='2' />
      </Box>
      ):(
        <div className='bg-blue-200 h-14 flex justify-center items-center'>
        <p className='text-sm font-medium cursor-pointer hover:underline'>Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply.† 
        <span className='text-md font-bold'>LEARN MORE▸</span></p>
      </div>
      )}
      
      {/* logo part */}
      <div className='h-24   flex items-center justify-center'>
       <div className="flex m-auto gap-6 items-center">
        <NavLink to="/">
       <img className='cursor-pointer w-36' src="https://i.postimg.cc/ZY9NdkKx/brandlogo.png" alt="SEPHORA" />

        </NavLink>
       <div className='flex justify-center items-center bg-gray-100 gap-2 py-1 px-5 rounded-full'>
          <p className='text-gray-500'> <BsSearch/> </p>
          <input className='w-96 py-1 outline-none bg-gray-100' type="text" placeholder='Search' />
       </div>

       <div className='flex justify-center items-center gap-2 border-r px-2'>
        <p className='text-xl cursor-pointer hover:text-gray-600'><SiHomeassistantcommunitystore/> </p>
        <div className=' leading-4 text-sm font-medium cursor-pointer' >
          <p className='hover:underline'>Store & Services</p>
          <p className='text-gray-600 text-xs font-normal hover:underline'>Choose your state</p>
        </div>
       </div>

       <div className='flex justify-center items-center gap-2 border-r px-2 cursor-pointer'>
        <p className='text-3xl hover:text-gray-600'><MdGroups/> </p>
        <div className=' leading-4 text-sm font-medium'>
          <p className='hover:underline'>Community</p>
        </div>
       </div>

       <div className='flex justify-center items-center gap-2 cursor-pointer'>
        <img  src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="" />
        <div className=' leading-4 text-sm font-medium'>
          <p>Sign in</p>
          <p className='text-gray-600 text-xs font-normal hover:underline'>For Free Shiping</p>
        </div>
       </div>

       <p className='text-2xl cursor-pointer hover:text-gray-600'><MdInsertComment/></p>
       <p className='text-2xl cursor-pointer hover:text-gray-600'><BsHeartFill/></p>
       <p className='text-2xl relative bottom-1 cursor-pointer hover:text-gray-600 '><BsBasket3Fill/></p>
       </div>
      </div>
      <div className="h-8 bg-black flex justify-between px-44 py-4 text-white items-center text-sm">
        {/* route */}
        <NavLink to="/New">
        <p>New</p>
        </NavLink>
        <NavLink to='/Brands'><p> Brands</p></NavLink>
        <NavLink to='/'><p> Makeup</p></NavLink>
        <NavLink to='/'><p> Skincare</p></NavLink>
        <NavLink to='/'><p> Hair</p></NavLink>
        <NavLink to='/'><p> Fragrance</p></NavLink>
        <NavLink to='/'><p> Tools & Brushes</p></NavLink>
        <NavLink to='/'><p> Bath & Body</p></NavLink>
        <NavLink to='/'><p> Mini Size</p></NavLink>
        <NavLink to='/'>
        <p className='-m-3'> <span className='relative z-10 bottom-3 left-4'>🌟</span> Gifts <span className='relative z-10 top-3 right-2'>✨</span> </p>
        </NavLink>
        <NavLink to='/'><p>Beauty Under $20</p></NavLink>
        <NavLink to='/'><p>Sale & Offers</p></NavLink>
      </div>
      {loading ? (
        <Box className='w-4/5 m-auto shadow-none h-4 p-4' padding='6' boxShadow='' bg='white'>
        <SkeletonText mt='1' mb='2' noOfLines={1} spacing='2' />
      </Box>
      ):(
        <div className='h-10 bg-gray-200 flex items-center justify-center font-semibold'>
        <p className='cursor-pointer hover:underline'>Shiping is delayed due to high demand.Need it sooner? Buy online,Pick Up in Store or get Same-day Delivery▸</p>
      </div>
      )}
      
    </div>
  )
}

export default Navbar;
