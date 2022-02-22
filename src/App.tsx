import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={TodosPage} exact/>
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
