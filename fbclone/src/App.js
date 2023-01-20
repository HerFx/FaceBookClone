import './App.css';
import Nav from './components/nav/nav';
import LeftNav from './components/left_nav/side_nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='content'>
        <LeftNav />
      </div>
    </div>
  );
}

export default App;
