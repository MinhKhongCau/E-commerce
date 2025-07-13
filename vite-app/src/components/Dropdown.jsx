import {FaAngleDown} from "react-icons/fa";

const Dropdown = ({handleSortASCButton, handleSortDESCButton}) => {
    return <div type={'button'} className={'group relative text-gray-500 m-2 px-4 items-center py-2 w-32 flex justify-between hover:bg-orange-500 hover:text-white flex items-center'}>Price <FaAngleDown className={'h-auto ml-6 text-sm'}/>
        <div id="dropdown" className={'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full absolute top-full left-0 scale-y-0 group-hover:scale-y-100 dark:bg-white-700'}>
            <ul className={'text-sm text-gray-700 top-full w-full bg-white z-1 dark:text-gray-200'} aria-labelledby="dropdownDefaultButton">
                <li>
                    <button type="button" className={'block text-gray-500 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-orange-500 dark:hover:text-white'} onClick={handleSortASCButton}>Ascending</button>
                </li>
                <li>
                    <button type="button" className={'block text-gray-500 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-orange-500 dark:hover:text-white'} onClick={handleSortDESCButton}>Descending</button>
                </li>
            </ul>
        </div>
    </div>
}

export default Dropdown;