import './App.css';
import { useSelector } from "react-redux";


function App() {

  const fruits = useSelector((state) => state.fruits);


  return (
    <div className="App">
      <header className="App-header">
        <div>
          {fruits.map((fruit) => (
            <p key={fruit}> {fruit} </p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
