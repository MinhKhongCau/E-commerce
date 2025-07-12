import { FaAngleDown } from "react-icons/fa";
import Dropdown from "./Dropdown.jsx";
import ProductItem from "./ProductItem.jsx";

const Products = ({products, priceDropdown, setPriceDropdown}) => {
    return <div className={'w-full h-auto bg-white'}>
        <h2 className={'font-bold text-center text-orange-500 m-6 p-4 text-3xl'}>Product for you</h2>

        <div className={'w-full bg-white flex gap-4'}>
            <p className={'text-xl text-gray-500 m-2 p-4 mr-6'}>Filter by</p>
            <button type={'button'} className={'text-gray-500 m-2 p-2 hover:bg-orange-500 hover:text-white'}>Newest</button>
            <button type={'button'} className={'text-gray-500 m-2 p-2 hover:bg-orange-500 hover:text-white'}>Best-selling</button>
            <button type={'button'} className={'text-gray-500 m-2 p-2 hover:bg-orange-500 hover:text-white'}>Nearby</button>
            <Dropdown isOpen ={priceDropdown} setOpen={setPriceDropdown}/>
        </div>

        <div className={'grid grid-cols-2 gap-3 bg-white p-4 m-2 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'}>
            {products.map((product,index) => (
                <ProductItem key={index} product = {product}/>
            ))}
        </div>
    </div>
}

export default Products;