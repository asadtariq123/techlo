import React from "react";
import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Navbar } from "./Navbar";
import Service from "./Service";
import Contactdata from "./Contactdata";
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/data">
        <Contactdata />
      </Route>
      <Route exact path="/"  >
        <Home/>
      </Route>
      <Route exact path="/service"  >
        <Service/>
      </Route>
      <Route exact path="/contact"  >
        <Contact/>
      </Route>
      <Route exact path="/about"  >
        <About/>
      </Route>
      <Redirect to="/" />
    </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
