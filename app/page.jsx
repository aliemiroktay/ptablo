"use client";

import Element from "@/components/Element";
import elements from "@/elements.json"
import elements2 from "@/elements2.json"
import { useState } from "react";

function Home() {

  const [element, setElement] = useState();
  const [dice, setDice] = useState();

  return (
    <div className="w-full h-full flex flex-col">

      <div className="flex flex-row mt-24 mx-auto">
        <button className="my-auto text-black px-2 py-1 border-2 border-gray-200 hover:bg-gray-200 hover:border-gray-400 focus:border-blue-600 rounded-xl bg-white font-bold text-center" onClick={() => { setDice(Math.floor(Math.random() * 6) + 1) }}>Zar At</button>
        <p className="text-5xl font-bold ml-5 my-auto">{dice}</p>
      </div>

      {element ? <div className={`mx-auto rounded-xl border-2 w-96 mt-5 p-3 select-none ${element.colors}`}>
        <p className="font-bold text-black text-lg">{element.name}</p>
        <p className="text-black text-md">{element.rule}</p>
      </div> : <></>}

      <div className="grid grid-cols-18 grid-rows-7 w-3/4 h-1/2 m-auto">
        {elements.map((element) => (
          <Element key={element.number ?? Math.floor(Math.random() * 1000000000)} onClick={() => setElement(element)} {...element} />
        ))}
      </div>

      <div className="grid grid-cols-15 grid-rows-2 w-3/5 m-auto">
        {elements2.map((element) => (
          <Element key={element.number ?? Math.floor(Math.random() * 1000000000)} onClick={() => setElement(element)} {...element} />
        ))}
      </div>
      
    </div>
  );
}

export default Home;