import logo from "./logo-crc_2.webp";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          Coded by Camila Rodrigues Campos
        </footer>
      </div>
    </div>
  );
}
