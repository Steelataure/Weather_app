import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';
import Banner from './Header';
import Background from './Background_video';
import Forms from './Forms';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Background />

      </header>
    </div>
  );
}
export default App;
