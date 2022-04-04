import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greetings name="JavaScript">Language of the Web</Greetings>
      <Greetings name="Golang" />
      <Greetings name="Swift">Language of iOS app</Greetings>
      <Welcome name="Flutter">Language for cross-mobile development</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click for Java</button></Welcome>
    </div>
  );
}

export default App;
