import './App.css';
import Login from './pages/Login'
import Nav from './Components/Nav'
import Home from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      
        <Nav />
        <main className="form-signin">
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </main>
      </BrowserRouter> 
    </div>
  )
}

export default App;