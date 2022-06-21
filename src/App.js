import './App.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import AppBody from "./components/AppBody";
import React from ".";
import Home from "./components/Home";
import Lista from "./components/Table"
import Formularz from "./components/Formularz";

function App() {
    return (
        <div >

            <AppBody/>

        </div>
    );
}

export default App;
