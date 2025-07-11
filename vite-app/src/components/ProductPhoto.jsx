const ProductPhoto = ({product}) => {
    return <img
        className={'object-contain w-full h-full group-hover:opacity-50'}
        alt={product.title}
        src={product.image}/>
}

export default ProductPhoto;