import React from 'react';
import Container from '@material-ui/core/Container'

// interface Props {
//   name: string | undefined
// }

const Home = (props: { name: string} ) => {
  return (
    <Container maxWidth="sm">
      <div>
        {props.name ? 'Hi' + props.name : 'You are not logged in'}!
      </div>
    </Container>
  );
}

export default Home;