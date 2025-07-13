import ProductItem from "./ProductItem";

const Products = ({products,setProducts}) => {
    const setFavoriteProduct = (productCode) => {
        setProducts(prev => prev.map(p => p.productCode === productCode ? {...p, favorite: !p.favorite} : p))
    }

    return (
        <div className={'grid grid-cols-2 gap-3 bg-white p-4 m-2 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'}>
            {products.map((product,index) => (
                <ProductItem key={index} product = {product} setFavoriteProduct={setFavoriteProduct}/>
            ))}
        </div>
    )
}

export default Products;