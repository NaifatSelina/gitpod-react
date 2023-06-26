import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import EventBinding from './components/EventBinding';
import NestingComponents from './components/NestingComponents';
import RenderingLists from './components/RenderingLists';
import Clock from './components/Clock';
import LifeCyclesCDU from './components/LifeCyclesCDU';



function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a stateful class component" name="Naifat" />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Naifat" age="23" />
      <EventsFunctional />
      <EventsClass />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
      < NestingComponents />
      < RenderingLists />
      < Clock />
      < LifeCyclesCDU />
    </div>
  );
}

export default App;
