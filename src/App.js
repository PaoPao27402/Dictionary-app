import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <Search />
      </main>
      </div>
      <footer>
      <div className="coded">
      coded by <strong> PaoPao </strong>
         <a href="https://github.com/PaoPao27402/weather-react/find/master">
        open source on GitHub</a>
    </div>
      </footer>
    </div>
  );
}


