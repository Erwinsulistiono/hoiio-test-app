import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthRoute, LandingRoute } from "./util/AuthRoute";
import { AuthProvider } from "./context/auth";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddCall from "./pages/AddCall";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Navbar />
          <LandingRoute exact path="/" component={Home} />
          <LandingRoute exact path="/add-call" component={AddCall} />
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/login" component={Login} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
