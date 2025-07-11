const Banner = ({ banners, itemActive }) => {
    return (
        <div className="w-full overflow-hidden max-h-screen bg-orange-600">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${itemActive * 100}%)`,
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
