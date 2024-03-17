import './App.css'
import {ItemListContainer} from './Componentes/ItemListContainer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar  from './Componentes/NavBar'
import { ItemDetailContainer }  from './Componentes/ItemDetailContainer'
// import {ItemList} from './Componentes/ItemDetailContainer'


function App() {

  return(

    <>


  <Router>
  <NavBar />
  <ItemDetailContainer />
  <Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/category/:id' element={<ItemListContainer />} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
  </Routes>
  </Router>



    </>
  )
  
}

export default App;
