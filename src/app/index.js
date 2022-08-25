import RollList from "../entities/rolls/RollList";
import './index.scss'
import logo from '../shared/img/Logo.svg'

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img src={logo} alt="" className="header-logo"/>
          <input type="text" className="search" placeholder="Поиск"/>
        </header>
      </div>
      <RollList/>
    </div>
  );
}

export default App;
