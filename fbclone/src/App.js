import './App.css';
import Nav from './components/nav/nav';
import LeftSide from './components/left_side/left_side';
import RightSide from './components/right_side/right_side';
import MainContent from './components/main_content/main_content';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='content'>
        <LeftSide />
        <MainContent />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
