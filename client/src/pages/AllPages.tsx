import React, {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from '../components/NavBar/Navbar'
import {authRoutes, publicRoutes} from './routesPages'
import MainPage from './MainPage'

const AllPages: FC = () => {
  const isAuth = true
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {isAuth && authRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>}/>
        )}

        {publicRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>}/>
        )}

        <Route path="*" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AllPages