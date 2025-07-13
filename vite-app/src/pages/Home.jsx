import { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import HotProduct from "../components/HotProduct.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import ChatBox from "../components/ChatBox.jsx";
import {
    fetchBestSellingProducts
} from '../service/GetData.js'

const Home = ({products, setProducts}) => {

    const [hotProducts, setHotProducts] = useState([])


    const [shopAssistants, setShopAssistants] = useState([
        {
            name: 'Glasswears',
            messages: [
                { sender: 'assistant', text: 'Hello! Welcome to Glasswears.' },
                { sender: 'assistant', text: 'Can I help you find the perfect pair of glasses?' }
            ],
            photo: 'https://static1.lenskart.com/media/desktop/img/24-oct-24/eye-landing-page/Story-eyehealth%20main1.png'
        },
        {
            name: 'Gaming Mouse',
            messages: [
                { sender: 'assistant', text: 'Hey gamer! Looking for a responsive mouse?' },
                { sender: 'assistant', text: 'We have RGB, wireless, and pro-grade models for you!' }
            ],
            photo: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1'
        },
        {
            name: 'Smart Watch',
            messages: [
                { sender: 'assistant', text: 'Hi there! Want to track fitness or receive notifications on your wrist?' },
                { sender: 'assistant', text: 'Let me help you choose the best smart watch!' }
            ],
            photo: 'https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg'
        },
        {
            name: 'Hair Dryer',
            messages: [
                { sender: 'assistant', text: 'Hello! Our hair dryers reduce frizz and dry fast!' },
                { sender: 'assistant', text: 'Would you like one with ionic or ceramic technology?' }
            ],
            photo: 'https://www.ikonicworld.com/cdn/shop/files/8904231012868_1.jpg?v=1741591697'
        },
        {
            name: 'Backpack Shop',
            messages: [
                { sender: 'assistant', text: 'Welcome! Looking for a new backpack for school or travel?' },
                { sender: 'assistant', text: 'We offer stylish, waterproof, and laptop-friendly bags.' }
            ],
            photo: 'https://www.border-embroideries.co.uk/pub/media/catalog/product/cache/faac27021abb5cb15a99a04d7c33b2c1/b/g/bg125_surf_blue_graphite.jpg'
        }
    ]);

    // Get Best seller
    useEffect(() => {
        const loadHotProducts = async () => {
            const data = await fetchBestSellingProducts();
            setHotProducts(data);
        };
        loadHotProducts();
    }, []);

    return <div className={'bg-white min-h-screen max-h-auto w-full pb-10 lg:w-4/5 mx-auto'}>
        <Banner />
        <HotProduct hotProducts={hotProducts} />
        <ProductsSection products={products} setProducts={setProducts} title={'Products'}/>
        <ChatBox shopAssistants={shopAssistants} />
    </div>
}

export default Home