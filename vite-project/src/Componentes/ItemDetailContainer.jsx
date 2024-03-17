import { useEffect, useState } from "react";
import products from "../Utils/MocksAsync.json";
import ItemDetail from "./ItemDetail";
import { fakeApiCall } from "../Utils/FakeApiCall";

export const ItemDetailContainer = () => {

    const [productsCharged,setProductsCharged] = useState([]) 
 
      useEffect(() => {
      fakeApiCall(products).then(resp => setProductsCharged(resp))
     
      }, [])

return(
<>
<div>
{productsCharged.productos && productsCharged.productos.map((item, index) => ( //esto necesita una valuidacion de que exista las funcion porq al principio el useState esta vacop en L7
<ItemDetail key={index} Item={item} />
                ))}
</div>

</>


)


}
