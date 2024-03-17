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


// import { useState } from "react";

// const ItemCount = ({ stock, initial, onAdd }) => {
//   const [count, setCount] = useState(initial)

//   const handleCountChange = (value) => {
//     const newCount = count + value;
//     if (newCount >= 1 && newCount <= stock) {
//       setCount(newCount)
//     }
//   }

//   const handleAdd = () => {
//     if (count > 0) {
//       onAdd(count)
//     }

//   }


//   return (<div>
//     <button onClick={() => handleCountChange(-1)}>
//       -
//     </button>
//     <button onClick={() => handleCountChange(+1)}>
//       +
//     </button>
//     <button onClick={() => handleAdd()}>
//       Agregar al carrito
//     </button>
//   </div>);
// }

// export default ItemCount;