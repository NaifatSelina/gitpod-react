import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a stateful class component" name="Naifat" />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Naifat" age="23" />
    </div>
  );
}

export default App;
