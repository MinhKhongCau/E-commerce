import { SiShopee } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
    return <Link to={'/'}>
        <div className={'flex items-center space-x-2'}>
            <SiShopee className={'text-white text-3xl'} />
            <p className={'text-white text-xl font-semibold'}>Shopee</p>
        </div>
    </Link>
}

export default Logo;