import './App.css';
import MyRGBPanel from './MyRGBPanel.js';
import MyCalculator from './MyCalculator';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 2024.5.2</h1>
        <h2>MyRGBPanel</h2>
        <MyRGBPanel/>
        <h2>MyCalculator</h2>
        <MyCalculator />
      </header>
    </div>
  );
}

export default App;
