import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Center from "./pages/Home/Center";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Collaborators from "./pages/Collaborators";

import About from "./pages/About";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Center />
          </Route>
          <Route exact path="/collaborators">
            <Collaborators />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
