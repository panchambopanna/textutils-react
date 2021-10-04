//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('primary');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#292e32';
      setBtnText('Enable Light Mode');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      setBtnText('Enable Dark Mode');
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const themeSelect = (e) => {
    setColor(e.target.value);
    console.log(setColor);
  }

  return (
    <>
      <Router>
        <Navbar logo='TextUtils' about='About' mode={mode} toggleMode={toggleMode} btnText={btnText} showAlert={showAlert} themeSelect={themeSelect} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <TextForm heading='Enter a text to analyze' mode={mode} showAlert={showAlert} color={color} />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
