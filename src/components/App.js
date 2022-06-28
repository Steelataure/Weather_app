import '../styles/App.css';
import Banner from './Banner';
import Main from './Main';
import Background from './Background_video';


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
