import React, { useState, useEffect } from 'react'
import HomeScreens from '../Screens/HomeScreens'
import LoginScreen from '../Screens/LoginScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterScreen from '../Screens/RegisterScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ProductScreen from '../Screens/ProductScreen'
import ContactScreen from '../Screens/ContactScreen'

const MainNavigation = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/Register" element={<RegisterScreen/>} />
          <Route path="/HomeScreen" element={<HomeScreens/>}/>
          <Route path="/ProfileScreen" element={<ProfileScreen/>} />
          <Route path="/ProductScreen" element={<ProductScreen/>} />
          <Route path="/ContactScreen" element={<ContactScreen/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainNavigation