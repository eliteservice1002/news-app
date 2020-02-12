import React,{useCallback} from 'react';
import "./app.scss";
// import { bindActionCreators } from 'redux';
import {useDispatch,useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, NavLink,Link, withRouter} from 'react-router-dom';
import News from "./../components/mainPageNews/mainPageNewsContainer";
import siglePageNews from "./../components/singlePageNews/singlePageNews";





const  App = () => {
  
  const dispatch = useDispatch(); 
  const news  = useSelector(store => store.news)
  
  
  // const plusOne = useCallback(
  //   () => dispatch(plus())
  // )
  // const minusOne = useCallback(
  //   () => dispatch(minus())
  // )
  


  
  
  return (
    
    <div>
      
      <Router>
       
        <Switch>
          <Route exact path="/" component={News} ></Route>
          <Route exact path="/news/:url" component={siglePageNews} ></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// const putStateToProps =(state) => {
  
//     return{
//       ...state
//   }
// }

// const putDispatchToProps =  {
//   plus,
//   minus,
// }




// export default connect(
//   putStateToProps,
//   putDispatchToProps
// )(App);
