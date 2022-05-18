import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetail id={1001} title={"Hola"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna magna, at rutrum sapien pharetra at. Fusce ultrices sed lectus a semper. Morbi feugiat velit lorem, in auctor velit accumsan vitae. Suspendisse luctus elementum mi, vel pellentesque augue ultricies a. Phasellus vulputate nulla neque, ac interdum massa malesuada eu. Morbi auctor purus in enim lacinia faucibus. Maecenas at auctor ipsum, in hendrerit lacus. Integer in neque ultricies dolor maximus convallis ac quis velit. Fusce velit ipsum, pretium quis porta imperdiet, efficitur ac dolor. Duis at interdum ante. Integer accumsan lacinia orci, non luctus elit vehicula vel. Aenean malesuada volutpat elit. Duis nec eleifend leo. Mauris laoreet iaculis augue vel varius. Proin pretium pretium libero vel maximus. Maecenas fermentum quis nisl non cursus. Mauris tempus quis est a iaculis. Sed lorem nisl, posuere a pulvinar vel, blandit quis sapien. Praesent dapibus gravida purus. Duis porttitor ipsum et rhoncus pharetra."} price={"$3.400"} stock={40}/>
    </div>
  );
}

export default App;
