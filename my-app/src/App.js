import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a stateful class component" name="Naifat" />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Naifat" age="23" />
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
