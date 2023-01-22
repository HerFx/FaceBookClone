import './App.css';
import Nav from './components/nav/Nav';
import LeftSide from './components/left_side/Left_side';
import RightSide from './components/right_side/Right_side';
import MainContent from './components/main_content/Main_content';

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
