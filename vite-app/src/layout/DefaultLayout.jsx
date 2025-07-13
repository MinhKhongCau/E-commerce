import React from 'react'
import Header from '../components/Header.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

export default DefaultLayout;