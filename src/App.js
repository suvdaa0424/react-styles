import "./styles.css";
import './App.css';
import TrafficLight from './components/TrafficLight';

function App() {
  return (
    <div className="App">
      <TrafficLight status="stop" />
      <TrafficLight status="wait" />
      <TrafficLight status="go" />
    </div>
  );
}

export default App;
