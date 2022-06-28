
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../PrimaryLayout/Header'
import Footer from '../PrimaryLayout/Footer'
import Home from '../Home'
import Blog from '../Blog'

//css
import { Global } from '@emotion/react'
import { GlobalStyle } from '../../styles/base.styles'

interface Props {}
const PrimaryLayout = ({ }: Props) => {
  return (
    <>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
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