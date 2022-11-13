import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Brand } from '../Components/Brand'
import Details from '../Components/Details'
import Home from '../Components/Home'
import New from '../Components/New'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path="/New" element={<New/>}/>
        <Route path='/Brands' element={<Brand/>}/>
        {/* <Route path='/Makeup' element={<>this is makeup page</>}/>
        <Route path='/Skincare' element={<>SkinCare</>}/>
        <Route path='/Hair' element={<>Hair</>}/>
        <Route path='/Fragrance' element={<>Fragrance</>}/>
        <Route path='/Tools' element={<>Tools</>}/>
        <Route path='/Bath' element={<>Bath</>}/>
        <Route path='Mini' element={<>Mini</>}/>
        <Route path='/Gifts' element={<>Gifts</>}/>
        <Route path='/Under' element={<>Under</>}/>
        <Route path='/Sale' element={<>Sale</>}/> */}
        <Route path='/cateogry/:details_page' element={<Details/>}/>
        
    </Routes>
  )
}

export default AllRoutes
