import React from 'react'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Services from './Services';
import Mission from './Mission';
import Support from './Support';
import Contact from './Contact';
import TextTransition, { presets } from "react-text-transition";

const motivationPrompts = [
  "be buff",
  "get fit",
  "lift weights",
  "lose weight",
  "look sexy",
  "kiss girls"
];

export default function Navibar() {
  const [index, setIndex] = React.useState(0);


  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />{' '}Get Fit Fast</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/mission">Mission</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/support">Support</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/mission">
          <Mission />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/">
          <div>
            <video src={process.env.PUBLIC_URL + "videoplayback.mp4"} autoPlay loop muted id="bgvid" className="absolute" />
            <header className="flex w-full h-full justify-center text-4xl font-bold align-center items-center left text-white m-auto absolute">
              <p>
                So you want to&#160;
              </p>
              <TextTransition className="height-minContent transText py-auto" text={motivationPrompts[index % motivationPrompts.length]} springConfig={presets.slow} />
            </header>
            
          </div>
        </Route>
      </Switch>
    </Router>

  )
};

