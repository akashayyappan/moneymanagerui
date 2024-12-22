import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import ProtectedRoute from './component/ProtectedRoute';
import AuthProvider from './service/useAuth';
import Statements from './component/Statements';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='statements' element={<ProtectedRoute><Statements /></ProtectedRoute>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
