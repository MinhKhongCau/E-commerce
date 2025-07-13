import { useEffect, useState } from "react";
import Dropdown from "./Dropdown.jsx";
import {
    fetchProductsAsc,
    fetchProductsDesc,
    fetchPersonalProducts,
    fetchBestSellingProducts
} from '../service/GetData'

const FilterSection = ({setProducts}) => {

    const handleForYouButton = () => {
        const loadProducts = async () => {
            const data = await fetchPersonalProducts();
            setProducts(data);
        };
        loadProducts();
    };

    const handleBestSellerButton = () => {
        const loadProducts = async () => {
            const data = await fetchBestSellingProducts();
            setProducts(data);
        };
        loadProducts();
    };

    const handleSortASCButton = () => {
        const loadProducts = async () => {
            const data = await fetchProductsAsc();
            setProducts(data);
        };
        loadProducts();
    };

    const handleSortDESCButton = () => {
        const loadProducts = async () => {
            const data = await fetchProductsDesc();
            setProducts(data);
        };
        loadProducts();
    };
    
    return (
        <div className={'w-full bg-white flex gap-4'}>
            <p className={'text-xl text-gray-500 m-2 p-4 mr-6'}>Filter by</p>
            <button 
                type={'button'} 
                className={'text-gray-500 m-2 py-2 px-4 hover:bg-orange-500 hover:text-white'}
                onClick={handleForYouButton}
            >For you</button>
            <button 
                type={'button'} 
                className={'text-gray-500 m-2 py-2 px-4 hover:bg-orange-500 hover:text-white'}
                onClick={handleBestSellerButton}
            >Best-selling</button>
            <Dropdown handleSortASCButton={handleSortASCButton} handleSortDESCButton={handleSortDESCButton}/>
        </div>
    )
}

export default FilterSection;