import ProductPhoto from "./ProductPhoto.jsx";
import { HiShoppingCart } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({isOpen, onClose, product}) => {
    return <div
            onClick={onClose}
            className={`fixed top-0 w-full h-full left-0 flex justify-center items-center z-50 ${isOpen ? 'visible bg-black/50' : 'invisible'}`}>
            <div
                className={'relative flex flex-col bg-white rounded w-4/5 sm:w-3/5 min-h-3/5 opacity-100 p-4 md:flex-row md:max-h-auto'}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={'text-red rounded absolute top-0 right-0 bg-red-300 p-2 m-4 font-bold text-xl hover:bg-red-500'}
                    onClick={onClose}
                ><IoCloseSharp/></button>
                <div className={'md:w-2/5 opacity-100 shadow-lg h-64 max-h-64 flex items-center'}>
                    <ProductPhoto product={product}/>
                </div>
                <div className={'flex-1 text-black p-4 m-4'}>
                    <h3 className={'text-2xl font-bold text-orange-500 py-4'}>{product.title}</h3>
                    <span className={'text-gray-500'}>Sold: {product.sold}</span>
                    <p className={'text-orange-500 text-2xl py-4'}>Price: {product.price}</p>
                    <p className={'text-gray-700'}>{product.description}</p>
                    <div className={'flex items-center py-4'}>
                        <p className={'text-gray-600'}>Quantity: </p>
                        <input type={'number'} min={0} max={100} defaultValue={1} className={'border-solid border-1 rounded px-4 py-2 mx-4'} />
                    </div>
                    <div className={'flex justify-between'}>
                        <button type={'button'} className={'px-6 py-2 text-orange-500 rounded m-4 text-3xl hover:bg-orange-500 hover:text-white border-solid border-1 border-orange-500'}><HiShoppingCart/></button>
                        <button type={'button'} className={'text-white text-xl bg-orange-400 rounded px-6 py-2 m-4 hover:bg-orange-500'}>{product.price}</button>
                    </div>
                </div>
            </div>
        </div>
}

export default Modal;