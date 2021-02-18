import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Center from "./pages/Home/Center";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collaborators from "./pages/Collaborators";
import About from "./pages/About";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Center />
        </Route>
        <Route exact path="/collaborators">
          <Collaborators/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
