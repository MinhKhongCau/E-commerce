import { useState } from "react";
import ProductPhoto from "./ProductPhoto.jsx";
import Modal from "./Modal.jsx";
import Title from "./Title.jsx";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { toggleFavorite, lookProduct } from '../service/GetData.js'

const ProductItem = ({ product, setFavoriteProduct }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleFavoriteButton = async (e) => {
        e.stopPropagation();

        try {
            const updatedProduct = await toggleFavorite(product.productCode);
            setFavoriteProduct(updatedProduct.productCode); 
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleDetailButton = () => {
        setIsOpen(true)

        const fetchLookProduct = async () => {
            try {
                lookProduct(product.productCode)
            } catch (error) {
                console.log("Error:", error)
            }
        } 
        fetchLookProduct()
    }

    return <>
        <div
            className={'flex flex-col flex-wrap content-between shadow-lg mb-4 p-4 hover:border-solid hover:border-orange-500 hover:border-2 transparent hover:shadow-xl'}
            onClick={() => setIsOpen(true)}>
            <div className={'w-full min-h-32 max-h-64 overflow-hidden'}>
                <ProductPhoto product={product} />
            </div>
            <div className={'mt-auto w-full'}>
                <Title title={product.title} />
                <div className={'text-black p-3 flex justify-between item-center text-sm w-full'}>
                    <p className={'text-orange-500'}>đ {product.price}</p>
                    <span className={''}>Sold {product.sold}</span>
                </div>
                <div className={'mb-6 flex justify-end'}>
                    <button type="button"
                        className="text-orange-500 text-2xl p-2 rounded hover:bg-orange-500 hover:text-white"
                        onClick={handleFavoriteButton}>{product.favorite ? <FaHeart /> : <CiHeart />}</button>
                    <button className={'bg-orange-400 text-white rounded ml-auto px-4 py-2 hover:bg-orange-500'}
                        type={'button'}
                        onClick={handleDetailButton}>Detail</button>
                </div>
            </div>
        </div>
        <Modal product={product} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
}

export default ProductItem;