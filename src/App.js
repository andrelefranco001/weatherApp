import "./assets/css/App.css";
import WeatherPanel from "./components/WeatherPanel";

function App() {
  return (
    <div className="App">
      <h1 className="app__name">Weather App</h1>
      <WeatherPanel />
    </div>
  );
}

export default App;
