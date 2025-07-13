import { SiShopee } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";
import Search from "./Search.jsx";
import Cart from "./Cart.jsx";
import Logo from "./Logo.jsx";
import FavoriteProducts from './FavoriteProducts.jsx'

const Header = () => {
    return (
        <div className={'mx-auto h-32 item-center'}>
            <div className={'bg-orange-500 p-10 shadow-md flex space-x-2 justify-around h-full'}>
                <Logo/>
                <Search/>
                <Cart/>
                <FavoriteProducts/>
            </div>
        </div>
    );
};

export default Header;
