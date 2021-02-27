import './App.css';
//import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles"
import { 
  BrowserRouter as Router, 
  Switch, Route, Link } from "react-router-dom";
import { 
  Drawer, List, ListItem, 
  ListItemIcon,
  // ListItemText,
  Container, Typography,
  } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
//import ProtectedRoute from './ProtectedRoute';
//import Profile from './pages/Profie';
import Form from "./Components/Form";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: { 
    textDecoration: 'none', 
    color: theme.palette.text.primary
  }
}))

// function Login() {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

function App() {
  const classes = useStyles();
  //const [isAuth, setIsAuth] = useState(true);
  return (
    <Router>
      <div style={{ display: 'flex' }}> 
        <Drawer
          style={{ width: '150px'}}
          variant="persistent"
          anchor="left"
          open={true}
          clasess={{ paper: classes.drawerPaper}}
        >
          <List>

            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
              
            </ListItem>
            </Link>

            <Link to="/signup" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
            </ListItem>
            </Link>

          </List>

        </Drawer>

        <Switch>
          <Route exact path="/">
            <Container> 
              <Typography variant="h3" gutterBottom>
                Welcome to Forum
              </Typography>
              <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
              </Typography>
            </Container>
          </Route>

          <Route exact path="/signup">
            {/* <button onClick={()=> {setIsAuth(true)}}>Login</button>
            <button onClick={()=> {setIsAuth(false)}}>Logout</button> */}
          <Container> 
            <Form />
            {/* <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />  */}
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
