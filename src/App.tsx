import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import News from './pages/News';

import './style.css';

const App = () => {
    return <>
        <BrowserRouter>
            <Header User={null} />
            <Route path="/" exact component={About} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/news" component={News} />
        </BrowserRouter>
    </>;
}

export default App;

