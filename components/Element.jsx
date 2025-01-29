function Element({ number, symbol, colors, isEmpty = false, onClick }) {
    return (
        <>
        {isEmpty ? 
            <div className="w-20 h-20">
            </div>
            :
            <div onClick={onClick} className={`${colors} w-20 h-20 rounded-xl text-black flex flex-col p-2 border-2 select-none cursor-pointer`}>
                <p className="text-sm text-gray-500">
                    {number}
                </p>
                <p className="text-3xl text-black mx-auto">
                    {symbol}
                </p>
            </div>
        }
        </>
    );
}

export default Element;