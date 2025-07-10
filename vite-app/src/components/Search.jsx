import {FaSearch} from "react-icons/fa";

const Search = () => {
    return <div className={'w-3/5 flex bg-white'}>
        <input
            type={'text'}
            placeholder={'Tìm kiếm sản phẩm...'}
            className={'w-full p-4 rounded-md bg-white text-black'}
        />
        <FaSearch className={'text-white px-5 py-2 bg-orange-500 h-auto w-16 mx-2 my-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50'}/>
    </div>

}

export default Search;