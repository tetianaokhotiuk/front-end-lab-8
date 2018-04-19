import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import RegForm from '../RegForm';



const App = () => (
  <div>
    <header className="header">
      <section className="top-panel">
        <img src = '../img/logo.jpg' alt = 'logo' className="logo"></img>
        <ul className ="menu">
          <nav className ="navbar">
            <li className ="menu__item">
              <Link className ="btn" to="/">HOME</Link>
            </li>
            <li className ="menu__item">
              <Link className ="btn" to="/about-us">ABOUT US</Link>
            </li>
            <li className ="menu__item">
              <Link className ="btn" to="/">CONTACTS</Link>
            </li>
            <li className ="menu__item">
              <Link className ="btn" to="/">registration</Link>
            </li>
          </nav>
        </ul>
        <RegForm/>    
        </section>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
