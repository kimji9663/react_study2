
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../PrimaryLayout/Header'
import Footer from '../PrimaryLayout/Footer'
import Home from '../Home'
import Blog from '../Blog'

//css
import '../../styles/global.css'

interface Props {}
const PrimaryLayout = ({ }: Props) => {
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