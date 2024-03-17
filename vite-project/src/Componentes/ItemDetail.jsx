import React from 'react';
import ItemCount from '../Componentes/ItemCount'

const ItemDetail = ({ Item }) => {
    return (
        <div className="mx-auto my-auto p-12 rounded-lg text-center shadow-xl ">
           <h2 className="text-xl font-bold">{Item.nombre}</h2>
            <p className="text-gray-600">Precio: {Item.precio}</p>
            <img src={Item.imagen} alt={Item.nombre} className="mt-4 mx-auto" />
            <ItemCount/>
        </div>
    );
}

export default ItemDetail;
