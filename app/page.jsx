"use client";

import Element from "@/components/Element";
import ScoreBoard from "@/components/ScoreBoard";
import elements from "@/elements.json"
import elements2 from "@/elements2.json"
import { useState } from "react";

function Home() {

  const [element, setElement] = useState();

  return (
    <div className="w-full h-full flex flex-col">
      {element ? <div className={`mx-auto rounded-xl border-2 w-96 mt-5 p-3 select-none ${element.colors}`}>
        <p className="font-bold text-black text-lg">{element.name}</p>
        <p className="text-black text-md">{element.rule}</p>
      </div> : <></>}

      <div className="grid grid-cols-18 grid-rows-7 w-[95%] lg:w-[80%] xl:w-[95%] 2xl:w-[80%] h-1/2 m-auto">
        {elements.map((element) => (
          <Element key={element.number ?? Math.floor(Math.random() * 1000000000)} onClick={() => setElement(element)} {...element} />
        ))}
      </div>

      <div className="grid grid-cols-15 grid-rows-2 w-3/5 m-auto">
        {elements2.map((element) => (
          <Element key={element.number ?? Math.floor(Math.random() * 1000000000)} onClick={() => setElement(element)} {...element} />
        ))}
      </div>
      <ScoreBoard />
    </div>
  );
}

export default Home;