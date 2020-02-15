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
    catOfFiltering
    }) => {

    const [isBurger, openCloseBurger] = useState(false);
    const [isDisSources, disSources] = useState("");
    const [isFilterCat, disFilterCat] = useState("latest");
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
                        
                        <div className={`news__filters ${history.location.pathname !== "/" ? "disabled-link":""}`}>

                            {catOfFiltering.map((cat,id)=>(
                                <div  key={id} onClick={() => {
                                    disFilterCat(cat)
                                    filterBy(cat)
                                    }} 
                                    className={`news__filter ${isFilterCat == cat?"disabled-link":""}`}>{cat} news</div>
                            ))}
                            
                            <input type="text" 
                            className="news___input-search input-group-text"
                            value={value}
                            onChange={e => searchByInputValue(e.target.value)}
                            disabled={history.location.pathname !== "/"?true:false}
                            />
                        </div>
                        <Burger className="burger-icon"  onClick={(e) => openCloseBurger(e)}   isOpen={isBurger}   />
                        {(isBurger && !isLoading) && 
                        <div ref={burgerRef} className={`burger-menu ${isBurger?"burger-menu_open":"burger-menu_close"}`}>
                            <div onClick={() => openCloseBurger()} className="burger-menu__close_btn">X</div>
                            <button 
                            className={`burger-menu_btn ${"home" == isDisSources? "burger-menu_btn_active disabled-link":''}`} 
                            onClick={() =>{
                                history.push("/")
                                filterBy("home") 
                                disSources("home")
                            }}
                            >All</button>
                            {namesOfSource.map((name,id)=>(
                                <button key={id} onClick={() =>{
                                    history.push("/")
                                    filterBy(name,namesOfSource ) 
                                    disSources(name)
                                }}
                                disabled={name == isDisSources?true:false} 
                                    
                                    className={`burger-menu_btn ${name == isDisSources? "burger-menu_btn_active ":''}`}>{name}</button>
                            ))}
                            
                            
                        </div>}

                </div>
    );
})




export default withRouter(Header);
