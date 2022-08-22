import RollList from "../entities/rolls/RollList";

function Index() {
  return (
    <div className="App">
      <header className="header">
        <input type="text" className="search" placeholder="Поиск"/>
      </header>
      <RollList/>
    </div>
  );
}

export default Index;
