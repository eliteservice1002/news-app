import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import News from "components/mainPageNews/mainPageNewsContainer";

const  App = () => {

  return (
      <Router>
          <Route  path="/" component={News} ></Route>
      </Router>
  );
}

export default App;

