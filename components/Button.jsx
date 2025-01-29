function Button({ onClick, className, text }) {
    return ( 
        <button className={`${className} text-black px-2 py-1 border-2 border-gray-200 hover:bg-gray-200 hover:border-gray-400 focus:border-blue-600 rounded-xl bg-white font-bold text-center`} onClick={onClick}>{text}</button>
     );
}

export default Button;