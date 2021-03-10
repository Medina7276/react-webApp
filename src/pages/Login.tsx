import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom'

const Login = (props: { setName: (name: string) => void }) => {
  interface PersonProps {
    email: string,
    password: string
  } 
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [redirect, setRedirect] = React.useState<boolean>(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const response = await fetch('http:/localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    const content = await response.json();

    props.setName(content.name);
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <form onSubmit={submit} >
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          
          <input type="email" className="form-control" placeholder="Email address" required
              onChange={e => setEmail(e.target.value)}
          />
          
          <input type="password" className="form-control" placeholder="Password" required
              onChange={e => setPassword(e.target.value)}
          />
        
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
       </form>
     </div>
  );
};

export default Login;