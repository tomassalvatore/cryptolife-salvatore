import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={'Welcome to CryptoLife, we are working'} />
    </div>
  );
}

export default App;
