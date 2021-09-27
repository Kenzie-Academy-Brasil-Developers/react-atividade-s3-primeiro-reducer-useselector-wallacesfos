import './App.css';
import { useSelector } from "react-redux";


function App() {

  const fruits = useSelector((state) => state.fruits);


  return (
    <div className="App">
      <header className="App-header">
        <div className="contain">
          {fruits.map((fruit) => (
            <p className="card" key={fruit}> {fruit} </p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
