import React from 'react';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import Article from "components/article";
import Header from "components/header"
import Error404 from "components/erorr404"
import Articles from "components/articles"

import "./style.scss";

const  App = () => {

  return (
      <Router>
          <div className="news news_margin">
                <div className="news__inner ">
                    <Header/>
                    
                    <div className="news__posts">
                            <Switch>
                                <Route exact path="/" component={Articles}/>
                                <Route exact path="/news/:url" component={Article} />
                                <Route exact path="**" component={Error404} />
                            </Switch>
                         
                    </div>
                </div>
            </div>
      </Router>
  );
}

export default App;

