import React, {SyntheticEvent} from 'react';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import PrimaryButton from './components/PrimaryButton'
import { useForm } from 'react-hook-form';
import { MainContainer } from "./components/MainContainer";
import { Input } from "./components/Input";
import { Form } from "./components/Form";
import * as yup from 'yup';
import { yupResolver } from '@hookfrom/resolvers';
import { useData } from './DataContext'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required filed"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field")
});

function Register() {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { 
      firstName: data.firstName,
      email: data.email
    },
    mode: "onBlur",
    resolver:  yupResolver(schema)
  })
  
  const onSubmit = (data) => {
    history.push("/register");
    setValues(date)
  }; 

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Input 
              ref={register}
              name="name"
              type="text"
              label="First Name"
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
              onChange={e => setName(e.target.value)}
          />
          
          <Input 
            ref={register}
            type="email"
            label="Email"
            name="email"
            required
            error={!!errors.email}
            helperText={errors?.email?.message}

            onChange={e => setEmail(e.target.value)}
          />
          <Input
            ref={register}
            name="password"
            type="text"
            label="Password"

            onChange={e => setPassword(e.target.value)}
          />
        
          {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button> */}
          <PrimaryButton 
          variant="contained" 
          color="default" 
          onClick={() => { alert('clicked') }}
          >
            Submit
          </PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Register;

// const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [redirect, setRedirect] = useState(false);
  
  // const submit = async (e: SyntheticEvent) => {
  //   e.preventDefault()

  //   await fetch('http:/localhost:8000/api/register', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password
  //     })
  //   });
  //   setRedirect(true);
  // }

  // if (redirect) {
  //   return <Redirect to="/login" />
  // }