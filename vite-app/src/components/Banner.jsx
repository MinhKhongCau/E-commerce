import { useState, useEffect } from "react";

const Banner = () => {

    const [banners,] = useState([
        {
            id: 1,
            title: 'Item 1',
            img: 'https://www.droppii.com/wp-content/uploads/2023/04/kich-thuoc-banner-Shopee.jpg'
        },
        {
            id: 2,
            title: 'Item 2',
            img: 'https://pos.nvncdn.com/14f951-12134/art/artCT/20230723_Vne80hqk.jpg'
        },
        {
            id: 3,
            title: 'Item 3',
            img: 'https://atpsoftware.vn/wp-content/uploads//2022/03/banner-shopee-0.png'
        }
    ]);
    // Time for Banner
    const [indexItemActive, setIndexItemActive] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexItemActive(prev => (1 + prev) % banners.length)
        }, 2000);

        return () => clearInterval(intervalId);
    }, [banners.length]);

    return (
        <div className="w-full overflow-hidden max-h-screen bg-orange-600">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${indexItemActive * 100}%)`,
                }}
            >
                {banners.map((item) => (
                    <div
                        key={item.id}
                        className="w-full flex-shrink-0 h-full relative"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full"
                        />
                        <div className="absolute top-4 left-4 bg-black/50 px-4 py-2 rounded text-white text-xl font-semibold shadow">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
