import React,{useEffect,useState,useRef} from 'react';
import { withRouter } from "react-router";
import { ReactComponent as Logo } from './news.svg';
import {Link} from 'react-router-dom'

// burger
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css' ;




import "./style.scss";




const Header = React.memo(({
    searchByInputValue,
    value,
    filterBy,
    namesOfSource,
    history,
    isLoading,
    }) => {

    const [isBurger, openCloseBurger] = useState(false);
    const [className, addClass] = useState("");
    let burgerRef = useRef(null);

    let  handleClickOutside = (event) => {
        if (burgerRef.current && !burgerRef.current.contains(event.target)) {
          openCloseBurger(false)
        }
      }
      useEffect(() => {
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });
   
    return (
            
                <div className="news__menu_header">
                    <Link to="/" onClick={(e)=>{
                        filterBy("home")
                        }} 
                        className={`${history.location.pathname === "/" ? "disabled-link":""}`}
                        >
                        <Logo className="news__menu_logo" />
                    </Link>
                        
                        <div
                        className={`news__filters ${history.location.pathname !== "/" ? "disabled-link":""}`}>
                            <div  onClick={() => filterBy("latest")} className="news__filter">Latest news</div>
                            <div  onClick={() => filterBy("alphabetically")} className="news__filter">Alphabetically</div>
                            <input type="text" 
                            className="news___input-search input-group-text"
                            value={value}
                            onChange={e => searchByInputValue(e.target.value)}
                            disabled={history.location.pathname !== "/"?true:false}
                            />
                        </div>
                        <Burger className="burger-icon"  onClick={(e) => openCloseBurger(e)}   isOpen={isBurger}   />
                        {(isBurger && !isLoading) && 
                        <div ref={burgerRef} className="burger-menu">
                            <button 
                            disabled={"home" == className?true:false} 
                            className={`burger-menu_btn ${"home" == className? "burger-menu_btn_active ":''}`} 
                            onClick={() =>{
                                history.push("/")
                                filterBy("home") 
                                addClass("home")
                            }}
                            >All</button>
                            {namesOfSource.map((name,id)=>(
                                <button key={id} onClick={() =>{
                                    history.push("/")
                                    filterBy(name,namesOfSource ) 
                                    addClass(name)
                                }}
                                disabled={name == className?true:false} 
                                    
                                    className={`burger-menu_btn ${name == className? "burger-menu_btn_active ":''}`}>{name}</button>
                            ))}
                            
                            
                        </div>}

                </div>
    );
})




export default withRouter(Header);
