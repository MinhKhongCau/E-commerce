const Products = ({products}) => {
    return <div className={'w-full h-auto'}>
        <h2 className={'font-bold text-center text-orange-500 m-6 p-4 text-3xl'}>Product for you</h2>
        <div className={'grid grid-cols-5 gap-3 p-4 m-2'}>
            {products.map((product) => (
                <div className={'h-64 relative'}>
                    <img
                        className={'object-contain w-full h-3/5'}
                        alt={product.title}
                        src={product.image}/>
                    <p className={'text-black mt-2 text-sm'}>{ product.title }</p>
                    <div>

                    </div>
                    <div className={'text-black flex justify-between item-center text-sm absolute bottom-0 w-full'}>
                        <p className={'text-orange-500'}>đ {product.price}</p>
                        <span className={''}>Sold {product.sold}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Products;