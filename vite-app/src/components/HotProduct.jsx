const HotProduct = ({
    hotProducts
                    }) => {
    return <div className={'w-full'} >
        <h2 className={'w-full m-6 p-4 text-orange-500 font-bold text-center text-3xl'}>Hot products</h2>

        <div className={'grid grid-cols-4 xl:grid-cols-8 w-full'}>
            {hotProducts.map((product) => (
                <div className={'w-full rounded overflow-hidden shadow-lg m-1 p-2'}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={'w-full h-32 object-contain p-3'}
                    />
                    <div className={'w-full text-center my-2 py-1 text-black bg-gray-400'}><p className={'text-white'}>{product.price}</p></div>
                    <div className={'w-full text-center text-black font-bold text-orange-400'}><span>{product.title}</span></div>
                </div>
            ))}
        </div>
    </div>
}

export default HotProduct;