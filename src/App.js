//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={'Welcome to CryptoLife, we are working'} />
      <header className='App-header'>
        <p>Hello World! Welcome to CryptoLife!</p>
        <p>We are working...</p>
      </header>
    </div>
  );
}

export default App;
