import logo from './logo.svg';
import './App.css';
import './Banner'
import Banner from './Banner';

function App() {
  return (
    <Banner />,
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplication météo
        </p>

      </header>
    </div>
  );
}

export default App;
