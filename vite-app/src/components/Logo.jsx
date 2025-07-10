import {SiShopee} from "react-icons/si";

const Logo = () => {
    return <div className={'flex items-center space-x-2'}>
        <SiShopee className={'text-white text-3xl'} />
        <p className={'text-white text-xl font-semibold'}>Shopee</p>
    </div>
}

export default Logo;