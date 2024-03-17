import React, {useState} from "react"


const Contador = () => {
const [counter, setCounter] = useState(0)


const handleClickSuma = () => {
    setCounter(counter +1) //aca no se puede usar sugarsintax
}

const handleClickResta = () => {
    setCounter(counter -1) //aca no se puede usar sugarsintax
}


return (<>
<div className="flex items-center justify-between w-1/12">
  <button className="bg-[#FF6C4D] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleClickSuma()}>
    +
  </button>

  <div>{counter}</div>

  <button className="bg-[#FF6C4D] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleClickResta()} disabled={counter === 0}>
    -
  </button>
</div>

    
</>);
}

export default Contador