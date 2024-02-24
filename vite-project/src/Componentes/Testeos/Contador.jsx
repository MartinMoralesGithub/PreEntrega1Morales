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
   
<button onClick={()=> handleClickSuma()}>+</button>

    <div>{counter}</div>

<button onClick={()=> handleClickResta()} disabled={counter ===0} >-</button>
    
</>);
}

export default Contador