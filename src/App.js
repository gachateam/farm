import ruong from './img/ruong.png';
import './app.css'
import Home from './components/Home';

function App() {
  return (
    <Home>
      <div className="ruong">
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <div className="cay">
          <div className="day-ruong">
            <div className="o-ruong"><div className="da-tuoi"></div><img src={require('./img/Carott.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"><div className="da-tuoi"></div><img src={require('./img/mamcay.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
          </div>
          <div className="day-ruong">
            <div className="o-ruong"><img src={require('./img/hat.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
          </div>
          <div className="day-ruong">
            <div className="o-ruong"></div>
            <div className="o-ruong"><img src={require('./img/hat.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
          </div>
        </div>
      </div>
    </Home>
  );
}

export default App;
