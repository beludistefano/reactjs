
import './App.css';
import Navbar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/Containers/ItemListContainer"
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cat/:id' element={<ItemListContainer />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />

        <Route path='/*' element= {<Navigate to="/" replace/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
