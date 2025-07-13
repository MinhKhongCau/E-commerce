import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FavoriteProducts = () => {
    const navigate = useNavigate();

    return <button 
        type={'button'} 
        className={'py-2 px-4 text-2xl rounded hover:bg-orange-300'} 
        onClick={() => 
            navigate('favorite')
        }>
        <FaHeart/>
    </button>
}

export default FavoriteProducts