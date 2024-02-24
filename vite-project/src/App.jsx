import './App.css'
import Componente2 from './Componentes/Componente2'
import Contador from './Componentes/Contador'


function App() {

  return(
    /*
    una vez que escribis esto:
    <>
    <Componente2/>
    </>    

<> </>  *** esto es una etiqueta vacia porquw el return
solo puede pasar un elemento esntonces lo de adentro
lo meto en esta etiqueta vacia  

    se crea el import automaticamente:
    import Componente2 from './Componentes/Componente2'
    */

    <>

    <Componente2 saludo="holaaaaaaaaaaaaa"/>
    <Contador />

    </>
    


    /*la otra manera es poner export antes del let componente2
     (en Componente.jsx)
     y import {Componente2} from './Componentes/Componente2'
     no olvidar las llaves
     este es un exportado dinamico
    */
  )
  

}

export default App
