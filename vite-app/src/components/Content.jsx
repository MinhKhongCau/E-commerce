import { useEffect, useState } from "react";
import Banner from "./Banner.jsx";
import HotProduct from "./HotProduct.jsx";
import Products from "./Products.jsx";
import ChatBox from "./ChatBox.jsx";

const Content = () => {
    const [banners,] = useState([
        {
            id: 1,
            title: 'Item 1',
            img: 'https://www.droppii.com/wp-content/uploads/2023/04/kich-thuoc-banner-Shopee.jpg'
        },
        {
            id: 2,
            title: 'Item 2',
            img: 'https://pos.nvncdn.com/14f951-12134/art/artCT/20230723_Vne80hqk.jpg'
        },
        {
            id: 3,
            title: 'Item 3',
            img: 'https://atpsoftware.vn/wp-content/uploads//2022/03/banner-shopee-0.png'
        }
    ]);

    const [hotProducts,] = useState([
        {
            title: 'Knife',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/knife-head_0-e1436fc.png',
            price: '200k',
            sale: '20%',
            sold: '50k'
        },
        {
            title: 'Changer smartphone',
            image: 'https://deluxecctv.com/wp-content/uploads/2023/06/products-large_3040_Smartphone_Portable_Voice_Changer_Accesories.jpg',
            price: '100k',
            sale: '20%',
            sold: '50k'
        },
        {
            title: 'Chair plastic',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpLJzrSRNSC--fgczGjqVhd-rmlcWv1OLiw&s',
            price: '200k',
            sale: '20%',
            sold: '50k'
        },
        {
            title: 'Face wash',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb24SbhGhNmxAvy2uD7AWAZazINMD7CPfGQ&s',
            price: '100k',
            sale: '20%',
            sold: '50k'
        },
        {
            title: 'Chair plastic',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpLJzrSRNSC--fgczGjqVhd-rmlcWv1OLiw&s',
            price: '200k',
            sale: '20%',
            sold: '50k'
        },
        {
            title: 'Face wash',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb24SbhGhNmxAvy2uD7AWAZazINMD7CPfGQ&s',
            price: '100k',
            sale: '20%',
            sold: '50k'
        },
        {
            title: 'Eyes glasses',
            image: 'https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/F/T/FT1567MFP3LBKV_1_lar.jpg',
            price: '200k',
            sale: '20%',
            sold: '50k'
        }])

    const [products,] = useState([
        {
            title: 'Knife',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/knife-head_0-e1436fc.png',
            price: '199k',
            sale: '10%',
            sold: '12k',
            qualified: 'Mall',
            voucher: '5%',
            description: 'High-carbon stainless steel kitchen knife, durable and sharp for everyday use.'
        },
        {
            title: 'Voice Changer for Smartphone',
            image: 'https://deluxecctv.com/wp-content/uploads/2023/06/products-large_3040_Smartphone_Portable_Voice_Changer_Accesories.jpg',
            price: '150k',
            sale: '15%',
            sold: '30k',
            qualified: 'Verified',
            voucher: '10%',
            description: 'Compact voice changer that connects to your smartphone, great for pranks and privacy.'
        },
        {
            title: 'Plastic Chair',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpLJzrSRNSC--fgczGjqVhd-rmlcWv1OLiw&s',
            price: '120k',
            sale: '25%',
            sold: '8k',
            qualified: 'Official Store',
            voucher: '20%',
            description: 'Durable and lightweight plastic chair, ideal for both home and outdoor settings.'
        },
        {
            title: 'Face Wash Gel',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb24SbhGhNmxAvy2uD7AWAZazINMD7CPfGQ&s',
            price: '89k',
            sale: '30%',
            sold: '45k',
            qualified: 'Mall',
            voucher: '10%',
            description: 'Refreshing face wash gel with natural extracts for oily and acne-prone skin.'
        },
        {
            title: 'Reading Glasses',
            image: 'https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/F/T/FT1567MFP3LBKV_1_lar.jpg',
            price: '250k',
            sale: '5%',
            sold: '20k',
            qualified: 'Mall',
            voucher: '0%',
            description: 'Stylish and lightweight glasses for reading with anti-glare lenses.'
        },
        {
            title: 'Bluetooth Earbuds',
            image: 'https://www.ourfriday.co.uk/image/cache/catalog/Beats/beats-studio-buds-black-1-png-800x800.webp',
            price: '350k',
            sale: '18%',
            sold: '75k',
            qualified: 'Verified',
            voucher: '15%',
            description: 'True wireless Bluetooth earbuds with noise cancellation and long battery life.'
        },
        {
            title: 'Electric Toothbrush',
            image: 'https://assets.boots.com/content/dam/boots/shop-by-department/electrical/2024---2025/9a/9b_Electrical_STB_OralB_supplied.dam.ts%3D1744018799962.png',
            price: '210k',
            sale: '20%',
            sold: '40k',
            qualified: 'Mall',
            voucher: '12%',
            description: 'Rechargeable electric toothbrush with soft bristles and multiple cleaning modes.'
        },
        {
            title: 'LED Desk Lamp',
            image: 'https://www.nitori.com.vn/cdn/shop/files/836038401.jpg?v=1696836614',
            price: '300k',
            sale: '10%',
            sold: '22k',
            qualified: 'Official Store',
            voucher: '10%',
            description: 'Adjustable LED lamp with touch control and USB charging port for your workspace.'
        },
        {
            title: 'Running Shoes',
            image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1741889693-asic-superblast-2-67d32026850eb.jpg?crop=0.803xw:0.803xh;0.109xw,0.0673xh&resize=980:*',
            price: '500k',
            sale: '35%',
            sold: '95k',
            qualified: 'Mall',
            voucher: '25%',
            description: 'Breathable running shoes with comfortable cushioning and anti-slip sole.'
        },
        {
            title: 'Backpack',
            image: 'https://www.border-embroideries.co.uk/pub/media/catalog/product/cache/faac27021abb5cb15a99a04d7c33b2c1/b/g/bg125_surf_blue_graphite.jpg',
            price: '270k',
            sale: '22%',
            sold: '18k',
            qualified: 'Verified',
            voucher: '10%',
            description: 'Spacious and stylish backpack with laptop compartment and waterproof material.'
        },
        {
            title: 'Hair Dryer',
            image: 'https://www.ikonicworld.com/cdn/shop/files/8904231012868_1.jpg?v=1741591697',
            price: '320k',
            sale: '28%',
            sold: '34k',
            qualified: 'Mall',
            voucher: '18%',
            description: 'Compact and fast-drying hair dryer with multiple heat settings and cool shot.'
        },
        {
            title: 'Smart Watch',
            image: 'https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg',
            price: '990k',
            sale: '12%',
            sold: '60k',
            qualified: 'Official Store',
            voucher: '5%',
            description: 'Feature-rich smart watch with heart rate monitor, step tracker, and Bluetooth call.'
        },
        {
            title: 'Water Bottle',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMWXZdpHtplH0TK0W1x3xEBEyDpUHOcEI8A&s',
            price: '89k',
            sale: '40%',
            sold: '10k',
            qualified: 'Verified',
            voucher: '15%',
            description: 'Eco-friendly and reusable water bottle made from BPA-free plastic.'
        },
        {
            title: 'Gaming Mouse',
            image: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1',
            price: '490k',
            sale: '17%',
            sold: '55k',
            qualified: 'Mall',
            voucher: '8%',
            description: 'Precision gaming mouse with customizable buttons and RGB lighting.'
        },
        {
            title: 'Makeup Brush Set',
            image: 'https://m.media-amazon.com/images/I/51ED-mvq-JL._AC_.jpg',
            price: '210k',
            sale: '20%',
            sold: '29k',
            qualified: 'Mall',
            voucher: '10%',
            description: 'Set of 10 soft and durable brushes for a flawless makeup finish.'
        }
    ]);

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


    const [indexItemActive, setIndexItemActive] = useState(0)
    const [priceDropdown, setPriceDropDown] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexItemActive(prev => (1 + prev) % banners.length)
        }, 2000);

        return () => clearInterval(intervalId);
    }, [banners.length]);

    return <div className={'bg-white min-h-screen max-h-auto w-full pb-10 lg:w-4/5 mx-auto'}>
        <Banner banners={banners} itemActive={indexItemActive} />
        <HotProduct hotProducts={hotProducts} />
        <Products products={products} priceDropdown={priceDropdown} setPriceDropdown={setPriceDropDown} />
        <ChatBox shopAssistants={shopAssistants} />
    </div>
}

export default Content;