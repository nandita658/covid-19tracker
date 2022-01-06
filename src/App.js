import './App.css';
import CountriesStatistics from './Pages/CountriesStatistics';

import Header from "./Pages/Header";
import LinearGraph from './Pages/LinearGraph';
import CovidMap from './Pages/CovidMap';

function App() {
  return (
    <div className="App">
      <Header /> 
      <CountriesStatistics />
      <LinearGraph title="Graphical Representation of last 30 days Stats" />
      <CovidMap />
    </div>
  );
}

export default App;