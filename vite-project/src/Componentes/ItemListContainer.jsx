import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import products from "../Utils/MocksAsync.json";
import ItemDetail from "./ItemDetail";
import { fakeApiCall } from "../Utils/FakeApiCall";

export const ItemListContainer = () => {
    const { id } = useParams();
    const [productsCharged, setProductsCharged] = useState([]);

    useEffect(() => {
        fakeApiCall(products).then(resp => setProductsCharged(resp));
    }, []);

    const getProductosByCategory = (catId, products) => {
        if (catId && !isNaN(catId)) {
            const categoryId = parseInt(catId);
            return products.filter((product) => product.categoria === categoryId);
        } else {
            return [];
        }
    }
    
    const productsPorCategoria = getProductosByCategory(id, products); 
    console.log('productos', productsPorCategoria)

    return (
        <>
            <div>
                {productsPorCategoria.map((producto) => (
                    <Link key={producto.id} to={`/item/${producto.id}`}>
                        <h2>{producto.nombre}</h2>
                    </Link>
                ))}
            </div>
        </>
    );
}

