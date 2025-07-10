import React from 'react'
import Header from '../components/Header.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'

const BasicLayout = ({products}) => {
    return <>
        <Header/>
        <Content products = {products}/>
        <Footer/>
    </>
}

export default BasicLayout;