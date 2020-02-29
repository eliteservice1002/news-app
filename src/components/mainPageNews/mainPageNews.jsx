import React,{memo} from 'react';
import singlePageNews from "./../singlePageNews/singlePageNewsContainer";
import {Route,Switch} from 'react-router-dom'
import Header from "../header/HeaderContainer"
import Error404 from "./../erorr404"
import Articles from "./../articles/articlesContainer"


import "./style.scss";




const News = ({
    isLoading ,error
    }) => {

        return (
            <div className=" news news-margin">
                <div className="news__inner ">
                    <Header/>
                    
                    <div className="news__posts">
                        {isLoading ? loader():
                            error == null ?(
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

const loader = () =>(
    <div className="news__loader">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
)



export default memo(News);
