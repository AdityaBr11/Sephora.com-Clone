import React, { useEffect, useState } from 'react';
import { get } from './Axiosapi';
import ButtomPart from './ButtomPart';
import Card from './Card';
import { Spinner } from '@chakra-ui/react';



const New = () => {
  const [iteam,setItem]=useState([]);
  const [cat,setCat]=useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    get({type:null,category:cat,limit:null}).then((res)=>setItem(res.data))
    const t=setTimeout(()=>{
      setLoading(false)
    },3000)

    return()=>{
      clearTimeout(t)
    }
  },[cat])
  console.log(iteam);
  if(loading){
    return(
      <div className='h-[300px] w-4/5 m-auto flex items-center justify-center mt-16 '>
       <img  src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="" />
      </div>
    )
  }
  return (
    <>
    {loading?(
       <div className='h-[200px] w-4/5 m-auto flex items-center justify-center mt-16 '>
       <img  src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="" />
      </div>
    ):(
    <div>
      <div className='w-3/4 m-auto mt-4 flex gap-1 mb-auto'>
        <div className='w-1/4  px-8'>
          <p className='my-2 mb-5 text-sm'>New <span className='text-xs ml-5'>( { iteam.length} Results found )</span> </p>
          <div className="flex flex-col gap-1 border-t border-b border-black py-3">
          <p onClick={()=>setCat(null)} className='my-1 text-lg font-semibold'>New</p>
      
          <p onClick={()=>setCat("skincare")} className='capitalize text-sm font-medium'>skincare</p>
          <p onClick={()=>setCat("fragrance")} className='capitalize text-sm font-medium'>fragrance</p>
          <p onClick={()=>setCat("bath")} className='capitalize text-sm font-medium'><span>bath</span>& Body</p>
          <p onClick={()=>setCat("hair")} className='capitalize text-sm font-medium'>hair</p>
          <p onClick={()=>setCat("tools")} className='capitalize text-sm font-medium'><span>tools</span> & Brushes</p>
          <p onClick={()=>setCat("makeup")} className='capitalize text-sm font-medium'>makeup</p>
          </div>
        </div>

        <div className='text-center w-3/4 pt-10 font-serif font-medium px-6'>
           <p className='text-3xl'>NEW</p>
           <div className='grid grid-cols-4 gap-3'>
            {
              iteam.map((e)=>(
                <Card 
                  key={e.id} brand={e.brand} 
                  imageUrl={e.imageUrl} name={e.name} 
                  price={e.price} rating={e.rating} id={e.id} numReviews={e.numReviews}/>
              ))
            }
           </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default New
