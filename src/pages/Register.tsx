import React, {SyntheticEvent} from 'react';
import { Redirect } from 'react-router-dom'
import lockdownIcon from 'marialui'


function Register() {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [redirect, setRedirect] = React.useState<boolean>(false);
  
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await fetch('http:/localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <form onSubmit={submit} >
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <input className="form-control" placeholder="Name" required
              onChange={e => setName(e.target.value)}
          />
          
          <input type="email" className="form-control" placeholder="Email address" required
              onChange={e => setEmail(e.target.value)}
          />
          <input type="password" className="form-control" placeholder="Password" required
              onChange={e => setPassword(e.target.value)}
          />
        
          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
      
      

    </div>
  );
}

export default Register;