import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './pages/Login'
import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';

function App() {
  const [name, setName] = useState('');

  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await fetch('http:/localhost:8000/api/user', {
  //         headers: { 'Content-Type': 'application/json' },
  //         credentials: 'include',
  //       });
  //       const content = await response.json();
  //       setName(content.name)
  //     }
  //   )();
  // });

  return (
      <BrowserRouter>
        <Nav name={name} setName={setName} />

          <Route path="/" exact component={() => <Home name={name}/>}/>
          <Route path="/login" component={() => <Login setName={setName}/> } />
          <Route path="/register" component={Register} />
        
      </BrowserRouter> 
  )
}

export default App;