import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Header></Header>
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            </Routes>
      </div>
      </Router>
    </>
    
  );
}

export default App;
