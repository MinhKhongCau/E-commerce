import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Products from "../components/ProductsSection"

const Favorite = ({products, setProducts}) => {

    return <div className="w-full sm:w-4/5 mx-auto">
        <SectionTitle text={'Favorite products'}/>
        <Products products={products.filter(p => p.favorite)} setProducts={setProducts}/>
    </div>
}

export default Favorite;