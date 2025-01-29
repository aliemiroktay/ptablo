function Element({ number, symbol, colors, isEmpty = false, onClick }) {
    return (
        <>
        {isEmpty ? 
            <div className="w-12 h-12 xl:w-20 xl:h-20">
            </div>
            :
            <div onClick={onClick} className={`${colors} w-12 h-12 xl:w-20 xl:h-20 rounded-xl text-black flex flex-col p-1 xl:p-2 border-2 select-none cursor-pointer`}>
                <p className="text-xs xl:text-sm text-gray-500">
                    {number}
                </p>
                <p className="text-xl xl:text-3xl text-black mx-auto">
                    {symbol}
                </p>
            </div>
        }
        </>
    );
}

export default Element;