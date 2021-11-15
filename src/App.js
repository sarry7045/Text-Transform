import Navbar from "../src/Components/Navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./Components/Page1";
import Alert from "./Components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Success");
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar
          title="Text Converter"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/">
            <Page1 mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
