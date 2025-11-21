import logo from './logo.svg';
import './App.css';
import TermekekAdmin from './components/admin/TermekekAdmin';
import TermekUrlap from './components/admin/TermekUrlap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore <img src={logo} className="App-logo" alt="logo" /></h1>
      </header>
      <article>
      
          <TermekUrlap />
          <TermekekAdmin />
      </article>
    </div>
  );
}

export default App;
