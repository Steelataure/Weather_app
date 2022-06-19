import logo from '../logo.svg';
import '../styles/App.css';
import './Banner'
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplication météo
        </p>

      </header>
    </div>
  );
}
export default App;
