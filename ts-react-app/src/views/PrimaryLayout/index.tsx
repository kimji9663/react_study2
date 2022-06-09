import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../PrimaryLayout/Header'
import Footer from '../PrimaryLayout/Footer'
import Home from '../Home'
import Blog from '../Blog'

function PrimaryLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default PrimaryLayout
