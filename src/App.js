import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { lighter, darker } from "./theme/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from "./components/Button";
import { lighter, darker } from "./theme/theme";

export default function App() {
  const [changer, setChanger] = React.useState(lighter);

  function themeChange() {
    setChanger(changer.theme === "light" ? darker : lighter);
  }
  return (
    <Router>
      <div className={`${changer.bgColor} ${changer.textColor}`}>
        <Button changer={changer} themeChange={themeChange} />
        <Switch>
          <Route>
            
          </Route>
          <Route >
          
          </Route>
          <Route path="/">
        
          </Route>
        </Switch>

      
      </div>
    </Router>
  );
}
