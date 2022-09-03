import RollList from "../pages/RollList";
import './index.scss'
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import Switcher from "../entities/switcher/Switcher";

function App() {
  return (
    <div className="app">
      <Switcher/>
      <Header/>
      <RollList/>
      <Footer/>
    </div>
  );
}

export default App;
