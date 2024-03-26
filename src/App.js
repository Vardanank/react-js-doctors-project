import "./App.css";
import HeaderComponent from "./Components/HeaderComponets/HeaderComponent";
import ButtonVisit from "./Components/VirtualVisitScheduler/ButtonVisitComponent/ButtonVisit";
import VirtualVisitScheduler from "./Components/VirtualVisitScheduler/VirtualVisitScheduler";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <VirtualVisitScheduler/>
    </div>
  );
}

export default App;
