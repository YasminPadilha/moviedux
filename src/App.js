import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./logo.svg";
import "./styles.css";
import MoviesGrid from "./components/MoviesGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
