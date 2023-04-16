import logo from '../logo.svg';
import './Home.css';
import { Link } from "react-router-dom";

export function Home() {
  return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />

          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <h1 className="mt-3 p-3 italic text-3xl font-bold border-4 border-red-500/50 rounded">
            El Barto was here. <span className="text-base not-italic">(This text is styled using tailwindcss)</span>
          </h1>

          <Link to="/page/Turkiye">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Click here to open the wikipedia article</button>
          </Link>

        </header>
      </div>
  );
}