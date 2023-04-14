import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1 className="mt-3 p-3 italic text-3xl font-bold border-4 border-red-500/50 rounded">
          El Barto was here. <span className="text-base not-italic">(This text is styled using tailwindcss)</span>
        </h1>

      </header>
    </div>
  );
}

export default App;
