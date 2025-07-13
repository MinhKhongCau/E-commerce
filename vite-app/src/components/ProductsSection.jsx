import SectionTitle from "./SectionTitle.jsx";
import FilterSection from "./FilterSection.jsx";
import Products from "./Products.jsx";

const ProductsSection = ({products, setProducts, title, setFavoriteProducts}) => {
    return <div className={'w-full h-auto bg-white'}>
        <SectionTitle text={title}/>
        <FilterSection setProducts={setProducts}/>
        <Products products={products} setProducts={setProducts} setFavoriteProducts={setFavoriteProducts}/>
    </div>
}

export default ProductsSection;