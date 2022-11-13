import axios from 'axios'
import React from 'react'

export const get = ({type,category,limit}) => {
  return (
    axios.get(`https://mock-server-api-qjlx.onrender.com/product`,{
        params:{
          type:type,
          category:category,
            _limit:limit
        }
    })
  )
}
export const details=({ele})=>{
  return(
    axios.get(`https://mock-server-api-qjlx.onrender.com/product?id=${ele}`)
  )
}
export const postcart=(data)=>{
  // console.log(data)
  return axios.post("https://cart-api.onrender.com/cart",data).then((res)=>console.log(res))
}
