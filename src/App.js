import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/Items/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer greet="Por ahora aparezco yo"/>
      <ItemCount />
    </div>
  );
}

export default App;
