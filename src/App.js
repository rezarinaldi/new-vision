import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Footer from "./parts/Footer";

import store from "./app/store";

export default function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/company">
                <Company />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Provider>
      </Router>
    </div>
  );
}
