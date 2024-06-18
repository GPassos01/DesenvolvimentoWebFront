import './App.css';
import './styles/ExemploCss.css'
import Pergunta from './Pergunta.js'
import PagodeQuestion from './pagode.js';
import { useState } from 'react';
import ButtonState from './buttonState.js';
import ExemploUseEffect from './exemploUseEffect.js';
import FetchData from './fetchData.js';
import CamerasScreen from './screens/CamerasScreen.js';
import CadastrarScreen from './screens/CadastrarScreen.js';
import LoginScreen from './screens/Login.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import logo from './assets/logo192.png';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        {/* <img src="/home/web/desenvolvimento-web-front/fundo.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/> */}
        UniVento</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/evento">Eventos</Nav.Link>
          <Nav.Link as={Link} to="/compra">Compra</Nav.Link>
          <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
          <Nav.Link as={Link} to="/cadastrar">Sign up</Nav.Link>
          <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          <Nav.Link as={Link} to="/addevento">Add Evento</Nav.Link>
          <Nav.Link as={Link} to="/addingresso">Add Ingresso</Nav.Link>
          <Nav.Link as={Link} to="/addlocal">Add Local</Nav.Link>
          <Nav.Link as={Link} to="/addcompra">Add Compra</Nav.Link>
          <Nav.Link as={Link} to="/geteventoid">Ver Evento</Nav.Link>
          <Nav.Link as={Link} to="/geteventoall">Todos Eventos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </div>
  );
}

function foo(){
  return "oi";
}



function Pergunta2(){
  return (
    // Comente a DIV abaixo para ver o erro
    <div>
      <h1>Perguntas</h1>
      <p>Perguntas vem aqui</p>
    </div>
  )
}

var title = "Isso é um texto";
var flag = true;

function Foo3(){
  return (
    <div>
      {flag ? title :"No title"}
    </div>
  )
}

function Foo4(){
  if (flag == true){
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }else{
    return (
      <div>
        <h1>No title</h1>
      </div>
    )    
  }

}
export default App;
