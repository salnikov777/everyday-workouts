import React from 'react';

import Layout from "./hoc/Layout/Layout";
import MyWorkouts from './containers/MyWorkouts/MyWorkouts'
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Layout>
      <Nav/>
      <MyWorkouts/>
    </Layout>
  );
}

export default App;
