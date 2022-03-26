import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from '../Components/Home'
import {Id} from '../Components/Id'
 export const AllRoutes = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/todo/:id'} element={<Id /> } />
    </Routes>
  )
}