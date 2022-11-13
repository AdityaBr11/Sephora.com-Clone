import React from 'react'
import { Box,Image,Badge } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'
import {CiHeart} from 'react-icons/ci';
import './common.css'
import { Link } from 'react-router-dom';

const Card = ({name,imageUrl,brand,rating,price,id,numReviews}) => {
  return (
    <div className='w-44 mt-6 card' key={id}>

      <Link to={`/cateogry/${id}`}>
     <Box maxW='md' borderWidth='1px' background='white' borderRadius='lg' overflow='hidden' className='relative'>
      <Image className='relative' src={imageUrl} alt={name} />
      <Box className='absolute top-[8.4rem] bg-black text-white w-full text-center opacity-40 p-1 cursor-pointer'>Quicklook</Box>
      <Box className='text-3xl absolute top-2 right-1 hidden dis'><CiHeart/> </Box>

      <Box p='6'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Box
            fontWeight='bold'
            fontFamily='heading'
            letterSpacing='wide'
            fontSize='sm'
            textTransform='capatailize'
            ml='2'
            className='cursor-pointer hover:underline'
          >{brand}
          </Box>
        </Box>
        <Box
          mt='1'
          lineHeight='tight'
          fontSize='xs'
        //   noOfLines={3}
          className='cursor-pointer hover:underline font-sans'
        >
          {name}
        </Box>
        <Box>
          <Box as='span' color='gray.600' fontSize='sm'>
          ${price}
          </Box>
        </Box>

        <Box className='text-xs' display='flex' gap='1' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < {rating} ? 'black' : 'gray.300'}
              />
            ))}
            <Box className='ml-2 text-sm'>{numReviews}</Box>
        </Box>
        <Box className='text-blue-400 text-xs mt-2 cursor-pointer hover:underline font-sans '>View similiar product</Box>
      </Box>
    </Box>
    </Link>
    </div>
  )
}

export default Card

