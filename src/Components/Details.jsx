import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb,BreadcrumbLink,BreadcrumbItem, Box, RadioGroup, Stack, Radio,Button, Tooltip, Alert, AlertIcon} from '@chakra-ui/react'
import {ChevronRightIcon, StarIcon} from '@chakra-ui/icons'
import { BsChevronRight,BsChevronLeft } from 'react-icons/bs'
import { FaHeart} from 'react-icons/fa'
import {Badge} from '@chakra-ui/react'
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import LockResetTwoToneIcon from '@mui/icons-material/LockResetTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import { details } from './Axiosapi'

const Details = () => {
const params=useParams()
console.log(params)
const [data,setData]=useState([])
const [final,setFinal]=useState({
    brand:"", 
    imageUrl:"",name:"", 
    price:"", rating:"", id:"", numReviews:""
})

useEffect(()=>{
    details({ele:params.details_page}).then((res)=>setData(res.data))
},[])
// const handleChange=async (e)=>{
//     setFinal({...final,id:e.id,brand:e.brand,imageUrl:e.imageUrl,name:e.name,price:e.price,rating:e.rating,numReviews:e.numReviews})
// }
// const handleSubmit=(e)=>{
//     postcart(e)
// }
// useEffect(()=>{
//      if(final.imageUrl!=""){
//         handleSubmit(final)
//         alert("Added to Cart")
//      }
        
// },[handleChange])
  return (
    <div>
        {data.map((i)=>(
            <div key={i.id}>
                <Breadcrumb className='w-5/6 m-auto' spacing='3px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem className='text-sm text-gray-500 capitalize'>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem className='text-sm text-gray-500'>
            <BreadcrumbLink href='/New'>Details</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink className='capitalize' href='#' >{i.category}</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
      <div className='flex h-[600px] w-5/6 m-auto mt-6 shadow-sm'>
        <div className=' w-1/2 flex'>
            <div className=' w-0/4 flex flex-col gap-6 mt-4'>
                <img className='h-[60px] w-[60px] rounded-full ml-4' src="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='h-[60px] w-[60px] rounded-full ml-4' src=" https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29zbWV0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='h-[60px] w-[60px] rounded-full ml-4' src="https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29zbWV0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='h-[60px] w-[60px] rounded-full ml-4' src="https://images.unsplash.com/photo-1573575155376-b5010099301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvc21ldGljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div className='flex gap-2 ml-8 items-center justify-center shadow-lg'>
                <p className='text-4xl text-gray-500'><BsChevronLeft/> </p>
                <img className='h-[440px] w-[440px]' src={i.imageUrl} alt="" />
                <p className='text-4xl text-black'><BsChevronRight/></p>
            </div>
        </div>

        <div className='w-1/2 leading-4 px-3 py-6'>
            <p className='text-xm font-bold'>{i.brand}</p>
            <p className='text-lg'>{i.name}</p>
            <div className="flex gap-3 text-xs mt-3">
                <p className='border-1 border-r border-gray-300 px-1'>Write a review</p>
                <p className='border-1 border-r border-gray-300 px-1'>Ask a question</p>
                <p className='flex justify-center items-center gap-1'><span className='text-xs'><FaHeart/></span> 10.1 K</p>
            </div>
            <Box display='flex' mt='2' alignItems='center' className='text-xs' gap='1'>
            {Array(5)
                .fill('')
                .map((_, j) => (
                <StarIcon
                    key={j}
                    color={j < 4 ? 'black' : 'gray.400'}
                />
                ))}
               <Box as='span' color='gray.600' fontSize='sm' className='ml-2 text-sm'>
                {i.numReviews}
            </Box>
            </Box>
            <p className='mt-3 text-lg font-bold'>${i.price} <span className='text-xs'>($32.00 value)</span></p>
            <Box>
              <Badge borderRadius='md' px='2' color='white' bg='black' mt='2'>
                New
             </Badge>
            </Box>
            <div className=' h-32 mt-3 shadow-xl rounded-md px-4 py-4'>
                <div className='flex justify-between items-center mb-2'>
                    <p className='text-lg font-bold'>Get It Shipped</p>
                    <p className='text-sm t hover:underline'>Shipping & Returns</p>
                </div>
                <RadioGroup defaultValue='1'>
                <Stack spacing={2} direction='column'>
                    <Radio colorScheme='gray' value='1' className='text-xs'>
                    <span className='text-md font-bold'>Standard </span><span className='text-sm text-blue-400 hover:underline'>Sign in</span> or <span  className='text-sm text-blue-400 hover:underline'>create an account</span> to enjoy <span className='text-md font-bold mr-4'>FREE standard shipping.</span> <span> <LocalShippingTwoToneIcon/></span>  
                    </Radio>
                    <Radio colorScheme='gray' value='2' className='text-xs'>
                    <span className='text-md font-bold'>Same-Day Delivery</span> Select to see availability for <span className='text-md font-bold mr-16 hover:underline'>your location</span> <span> <LockResetTwoToneIcon/></span>  
                    </Radio>
                </Stack>
                </RadioGroup>
            </div>

            <div className=' h-20 mt-3 shadow-xl rounded-md px-4 py-1'>
            <div className='flex justify-between items-center mb-2'>
                    <p className='text-lg font-bold'>Buy Online & Pick Up </p>
                    <p className='mr-4'><StoreTwoToneIcon/> </p>
                </div>
                <RadioGroup defaultValue=''>
                <Stack spacing={2} direction='column'>
                    <Radio colorScheme='black' value='1' className='text-xs' isDisabled>
                    <span >Select to see availability at </span> <span className='text-md font-bold hover:underline'>stores near you</span> 
                    </Radio>
                </Stack>
                </RadioGroup>
            </div>
            <div className='flex items-center mt-8 gap-0 bg-red-500 w-[212px] rounded-l-3xl rounded-r-3xl'>
               <div>
                <select name="" id="" className='rounded rounded-l-3xl text-md h-lg px-4 py-3 bg-red-500 border-0 text-white font-semibold'>
                        <option className='bg-white text-gray-600' value="1">1</option>
                        <option className='bg-white text-gray-600' value="2">2</option>
                        <option className='bg-white text-gray-600' value="3">3</option>
                        <option className='bg-white text-gray-600' value="4">4</option>
                    </select>
               </div>
            <div>
            <Tooltip hasArrow label='Click to add into cart' bg='white' mt='3' mb='3'color='black' >
                <Button onClick={()=>
                  alert("Product has been Added")
                
                } className='' fontSize='md' colorScheme='red' size='lg' roundedRight='3xl'>
                    Add to Basket
                </Button>
            </Tooltip>
            
            </div>
            </div>
        </div>
      </div>
            </div>
        ))}
        
    </div>
  )
}

export default Details

// brand: "Skinfix"
// category:"skincare"
// id: 43
// imageUrl: "https://www.sephora.com/productimages/sku/s2215945-main-zoom.jpg?imwidth=270&pb=2020-03-allure-clean-2019&imwidth=164"
// name: "Barrier+ Triple Lipid-Peptide Face Cream"
// numReviews: 1600
// price: 20
// rating: 4.5
// type: "moisturizers"
