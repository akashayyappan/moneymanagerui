import React from 'react';
import './App.css';
import Header from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './component/login';
import Dashboard from './component/dashboard';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
