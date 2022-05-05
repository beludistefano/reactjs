import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

      </header>
      <ItemListContainer greet="Hola"/>
    </div>
  );
}

export default App;
