import {useEffect, useState} from "react";
import Banner from "./Banner.jsx";
import HotProduct from "./HotProduct.jsx";
import Products from "./Products.jsx";

const Content = () => {
    const [banners,] = useState([
        {
            id: 1,
            title: 'item 1',
            img: 'https://www.droppii.com/wp-content/uploads/2023/04/kich-thuoc-banner-Shopee.jpg'
        },
        {
            id: 2,
            title: 'item 2',
            img: 'https://pos.nvncdn.com/14f951-12134/art/artCT/20230723_Vne80hqk.jpg'
        },
        {
            id: 3,
            title: 'item 3',
            img: 'https://atpsoftware.vn/wp-content/uploads//2022/03/banner-shopee-0.png'
        }
    ]);

    const [hotProducts, ] = useState([
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

    const [products, ] = useState([
        {
            title: 'Knife',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/knife-head_0-e1436fc.png',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Changer smartphone',
            image: 'https://deluxecctv.com/wp-content/uploads/2023/06/products-large_3040_Smartphone_Portable_Voice_Changer_Accesories.jpg',
            price: '100k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Chair plastic',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpLJzrSRNSC--fgczGjqVhd-rmlcWv1OLiw&s',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Face wash',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb24SbhGhNmxAvy2uD7AWAZazINMD7CPfGQ&s',
            price: '100k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Eyes glasses',
            image: 'https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/F/T/FT1567MFP3LBKV_1_lar.jpg',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Knife',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/knife-head_0-e1436fc.png',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Changer smartphone',
            image: 'https://deluxecctv.com/wp-content/uploads/2023/06/products-large_3040_Smartphone_Portable_Voice_Changer_Accesories.jpg',
            price: '100k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Chair plastic',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpLJzrSRNSC--fgczGjqVhd-rmlcWv1OLiw&s',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Face wash',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb24SbhGhNmxAvy2uD7AWAZazINMD7CPfGQ&s',
            price: '100k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Eyes glasses',
            image: 'https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/F/T/FT1567MFP3LBKV_1_lar.jpg',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Knife',
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/knife-head_0-e1436fc.png',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Changer smartphone',
            image: 'https://deluxecctv.com/wp-content/uploads/2023/06/products-large_3040_Smartphone_Portable_Voice_Changer_Accesories.jpg',
            price: '100k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Chair plastic',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpLJzrSRNSC--fgczGjqVhd-rmlcWv1OLiw&s',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Face wash',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb24SbhGhNmxAvy2uD7AWAZazINMD7CPfGQ&s',
            price: '100k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        },
        {
            title: 'Eyes glasses',
            image: 'https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/F/T/FT1567MFP3LBKV_1_lar.jpg',
            price: '200k',
            sale: '20%',
            sold: '50k',
            qualified: 'Mall',
            voucher: '15%'
        }])

    const [indexItemActive, setIndexItemActive] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexItemActive(prev => (1 + prev) % banners.length)
        }, 2000);

        return () => clearInterval(intervalId);
    }, [banners.length]);

    return <div className={'bg-white min-h-screen max-h-auto w-full pb-10'}>
        <Banner banners = {banners} itemActive = {indexItemActive}/>
        <HotProduct hotProducts={hotProducts}/>
        <Products products = {products}/>
    </div>
}

export default Content;