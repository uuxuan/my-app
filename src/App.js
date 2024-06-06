import './App.css';
import MyRGBPanel from './components/rgb-panel/MyRGBPanel.js';
import MyCalculator from './components/calculator/MyCalculator';
import MySlider from "./components/rgb-panel/MySlider";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <div className="App">
    <h1>MySlider</h1>
    <MySlider />
    <h1>MyRGBPanel</h1>
    <MyRGBPanel />
    <h1>MyCalculator</h1>
    <MyCalculator />
    <h1>Tic-Tac-Toe Game</h1>
    <TicTacToe />
  </div>
  );
}

export default App;
