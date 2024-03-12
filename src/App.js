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
          <Dictionary defaultKeyword="Resilience" />
        </main>
        <footer className="App-footer text-center">
          Coded by{" "}
          <a
            href="https://crcportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Camila Rodrigues Campos
          </a>{" "}
          and is open-sourced onx{" "}
          <a
            href="https://github.com/camilarcampos-ops/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-project-crcportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
