import './App.css';
// import Boton from './Components/Boton';
import Navbar from './Components/componente1/Navbar'
import Tarjeta from './Components/componente2/Tarjeta'
import Text from './Components/componente3/txt';
import Footer from './Components/componente4/footer';
import Formulario from './Components/componente5/form';
import Switch from './Components/componente6/switch';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Tarjeta></Tarjeta>
      <Text></Text>
      <Footer></Footer>
      <Formulario></Formulario>
      <Switch></Switch>
    </div>
  );
}




export default App;
