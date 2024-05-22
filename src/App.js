import './App.css';
import MyRGBPane1 from './components/MyRGBPane1';
import MyCalculator from './components/MyCalculator';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 2024.5.2</h1>
        <h2>MyRGBPane1</h2>
        <MyRGBPane1/>
        <h2>MyCalculator</h2>
        <MyCalculator />
      </header>
    </div>
  );
}

export default App;
