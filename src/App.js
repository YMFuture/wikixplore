import logo from './logo.svg';
import './App.css';

export default function App() {
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
        <div className="content-center">
          <MyButton />
        </div>

      </header>
    </div>
  );
}

function MyButton() {
  function handleClick() {
    alert('TODO: Learn conditional rendering and/or routing');
  }

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
      Click here to open the wikipedia-article
    </button>
  );
}