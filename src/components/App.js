import '../styles/App.css';
import Banner from './Header';
import Background from './Background_video';
import 'bootstrap/dist/css/bootstrap.min.css'


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
