import React from 'react';

// interface Props {
//   name: string | undefined
// }

const Home = (props: { name: string} ) => {
  
  return (
    <div>
      {props.name ? 'Hi' + props.name : 'You are not logged in'}!
    </div>
  );
}

export default Home;