import React, {FC} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ReviewsPage from '../pages/ReviewsPage'
import Navbar from '../NavBar/Navbar'

interface IRoutes {}

const RoutesPages: FC<IRoutes> =
  ({}) => {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/reviews' element={<ReviewsPage />}/>
        </Routes>
      </BrowserRouter>
    )
  }

export default RoutesPages