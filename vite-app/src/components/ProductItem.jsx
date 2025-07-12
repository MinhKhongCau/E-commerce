import {useState} from "react";
import ProductPhoto from "./ProductPhoto.jsx";
import Modal from "./Modal.jsx";
import Title from "./Title.jsx";

const ProductItem = ({product}) => {
    const [isOpen,setIsOpen] = useState(false)
    return <>
        <div
            className={'flex flex-col flex-wrap content-between shadow-lg mb-4 p-4 hover:border-solid hover:border-orange-500 hover:border-2 transparent hover:shadow-xl'}
            onClick={() => setIsOpen(true)}>
            <div className={'w-full min-h-32 max-h-64 overflow-hidden'}>
                <ProductPhoto product={product}/>
            </div>
            <div className={'mt-auto w-full'}>
                <Title title={product.title}/>
                <div className={'text-black p-3 flex justify-between item-center text-sm w-full'}>
                    <p className={'text-orange-500'}>đ {product.price}</p>
                    <span className={''}>Sold {product.sold}</span>
                </div>
                <div className={'mb-6 flex justify-end'}>
                    <button className={'bg-orange-400 text-white rounded ml-auto px-4 py-2 hover:bg-orange-500'}
                            type={'button'}
                            onClick={() => setIsOpen(true)}>Detail</button>
                </div>
            </div>
        </div>
        <Modal product={product} isOpen = {isOpen} onClose = {() => setIsOpen(false)}/>
    </>
}

export default ProductItem;