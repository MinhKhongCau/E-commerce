const HotProduct = ({
    hotProducts
                    }) => {
    return <div className={'w-full'} >
        <p className={'w-full m-6 p-4 text-orange-500 font-bold text-center text-3xl'}>Hot products</p>

        <div className={'flex justify-between'}>
            {hotProducts.map((product) => (
                <div className={'w-64 rounded overflow-hidden shadow-lg p-3'}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={'w-full h-32 object-cover p-3'}
                    />
                    <div className={'w-full text-center my-2 py-1 text-black bg-gray-200'}><p>{product.price}</p></div>
                    <div className={'w-full text-center text-black font-bold text-orange-400'}><span>{product.title}</span></div>
                </div>
            ))}
        </div>
    </div>
}

export default HotProduct;