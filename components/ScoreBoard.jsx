import { useState } from "react";
import Button from "./Button";
//import elements from "@/elements.json"
//mport elements2 from "@/elements2.json"

function ScoreBoard() {

    const [dice, setDice] = useState();
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);
    const [turn, setTurn] = useState(0);
    const [positions, setPositions] = useState({});
    //const [points, addPoints] = useState(0);
    

    function rollDice(){

        //var allElements = [...elements, ...elements2]
        var rolledNumber = Math.floor(Math.random() * 6) + 1;
        var currentPosition = positions[turn] ?? 1
        if(currentPosition + rolledNumber <= 118){
            currentPosition = currentPosition + rolledNumber
        }else{
            currentPosition = 118
        }
        var newPositions = positions
        newPositions[turn] = currentPosition
        setPositions(newPositions) 
        setDice(rolledNumber)
        var newTurn = turn
        newTurn = turn + 1;
        if(newTurn > players.length - 1){
            newTurn = 0
        }

        for(let i = 0; i <= players.length; i += 1){
            if(i > 0 && (positions[i] == 3 || positions[i] == 14 ||  positions[i] == 16 ||  positions[i] == 21 ||  positions[i] == 23 ||  positions[i] == 24 ||  positions[i] == 30 || positions[i] == 31 || positions[i] == 33 || positions[i] == 51 || positions[i] == 83 || positions[i] == 61 || positions[i] == 62 || positions[i] == 67 || positions[i] == 68 || positions[i] == 94 || positions[i] == 95)){
                newTurn = i
            }else if(i == 0 && (positions[i] == 3 || positions[i] == 14 ||  positions[i] == 16 ||  positions[i] == 21 ||  positions[i] == 23 ||  positions[i] == 24 ||  positions[i] == 30 || positions[i] == 31 || positions[i] == 33 || positions[i] == 51 || positions[i] == 83 || positions[i] == 61 || positions[i] == 62 || positions[i] == 67 || positions[i] == 68 || positions[i] == 94 || positions[i] == 95)){
                newTurn = 0
            }
            if(positions[i] == 2 || positions[i] == 29 || positions[i] == 41 || positions[i] == 48 || positions[i] == 84 || positions[i] == 88 || positions[i] == 92){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 3
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " + 3")
            }
            if(positions[i] == 11){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 6
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Na -> Cl")
            }
            if(positions[i] == 27){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 1
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Co -> Ni")
            }
            if(positions[i] == 26){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 1
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Fe -> Co")
            }
            if(positions[i] == 34){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 -2
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " - 2 (Se)")
            }
            if(positions[i] == 4){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 3
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " H <- Be")
            }
            if(positions[i] == 15){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 2
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Al <- P")
            }
            if(positions[i] == 19){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 1
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " - 1 (K)")
            }
            if(positions[i] == 82){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 1
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " - 1 (Pb)")
            }
            if(positions[i] == 39){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 6
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " + 6")
            }
            if(positions[i] == 22){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 5
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " - 5 (Ti)")
            }
            if(positions[i] == 50){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 32
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Sn -> Pb")
            }
            if(positions[i] == 53){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 4
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " - 4 (I)")
            }
            if(positions[i] == 45){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 38
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Rh -> Pt")
            }
            if(positions[i] == 76){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 2
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Os -> Pt")
            }
            if(positions[i] == 80){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 - 5
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " - 5 (Hg)")
            }
            if(positions[i] == 78){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 1
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " Pt -> Au")
            }
            if(positions[i] == 85){
                let currentPosition2 = positions[i] ?? 1
                currentPosition2 = currentPosition2 + 5
                let newPositions1 = positions
                newPositions1[i] = currentPosition2
                setPositions(newPositions)
                setDice(rolledNumber + " + 5 (As)")
            }
        }
        
        console.log(positions)
        setTurn(newTurn)

    }

    return (
        <div className="bg-white w-full shadow-xl flex flex-row shrink-0 h-64 xl:h-84 pt-10">
            <div className="flex flex-col ml-auto mr-10">
                <div className="flex flex-row">
                <input placeholder="Oyuncu Adı" className="border-2 border-gray-200 py-1 px-3 text-xl bg-white focus:border-blue-600 rounded-xl" onKeyUp={(e) => setPlayerName(e.target.value)} />
                <Button text={"Oyuncu Ekle"} className={"ml-2"} onClick={() => setPlayers([playerName, ...players])} />
                </div>
                {players.map((player, index) => (
                    <p key={index} className={`ml-5 mt-5 ${index === turn ? "font-bold text-black" : "font-semibold text-gray-400"}`}>{player} <span className="text-red-500">{positions[index]}</span> </p>
                ))}
            </div>
            <div className="flex flex-col mr-auto">
                <Button text="Zar At" onClick={rollDice} className={"mt-1"} />
                <p className="text-5xl font-bold ml-5 my-auto">{dice}</p>
            </div>
        </div>
    );
}

export default ScoreBoard;