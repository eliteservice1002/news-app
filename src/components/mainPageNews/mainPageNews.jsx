import React,{memo} from 'react';
import singlePageNews from "components/singlePageNews/singlePageNewsContainer";
import {Route,Switch} from 'react-router-dom'
import Header from "components/header/HeaderContainer"
import Error404 from "components/erorr404"
import Articles from "components/articles/articlesContainer"


import "./style.scss";




const News = ({error}) => {

        return (
            <div className=" news news-margin">
                <div className="news__inner ">
                    <Header/>
                    
                    <div className="news__posts">
                        {error == null ?(
                            <Switch>
                                <Route exact path="/" component={Articles}/>
                                <Route exact path="/news/:url" component={singlePageNews} />
                                <Route exact path="**" component={Error404} />
                            </Switch>
                            ):<Route exact path="**" component={Error404} />
                         }
                         
                         
                    </div>
                </div>
            </div>
    );
}



export default memo(News);
