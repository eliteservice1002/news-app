import React,{useEffect,useState,useRef,memo} from 'react';
import { withRouter } from "react-router";
import { ReactComponent as Logo } from './assets/news.svg';
import {Link} from 'react-router-dom'

// burger
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css' ;
// 

import "./style.scss";




const Header = ({
    searchByInputValue,
    value,
    filterBy,
    namesOfSource,
    history,
    isLoading,
    catOfFiltering,
    fiterBySource,
    isFullPostsChildren
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
            
                <header className="news__menu_header">
                    <Link to="/" onClick={()=>{
                        fiterBySource("")
                        }} 
                        className={`${(history.location.pathname === "/" && isFullPostsChildren) ? "disabled-link":""}`}
                        >
                        <Logo className="news__menu_logo" />
                    </Link>
                        
                        <div className={`news__filters ${history.location.pathname !== "/" ? "disabled-link":""}`}>

                            {catOfFiltering.map((cat,id)=>(
                                <div  key={id} onClick={() => {
                                    disFilterCat(cat)
                                    filterBy(cat)
                                    }} 
                                    className={`news__filter ${(isFilterCat === cat || !isFullPostsChildren )?"disabled-link":""}`}>{cat} news</div>
                            ))}
                            
                        <input type="text" 
                        className="news___input-search input-group-text"
                        value={value}
                        onChange={e => searchByInputValue(e.target.value)}
                        disabled={history.location.pathname !== "/"?true:false}
                        />
                        </div>
                        <Burger className="burger-icon"  onClick={(e) => openCloseBurger(e)}   isOpen={isBurger}   />
                        <div ref={burgerRef} className={`burger-menu ${(isBurger && !isLoading) ?"burger-menu_open":"burger-menu_close"}`}>
                            <div onClick={() => openCloseBurger()} className="burger-menu__close_btn">X</div>
                            <button 
                            className={`burger-menu__btn ${"home" === isDisSources? "burger-menu__btn_active":''}`} 
                            onClick={() =>{
                                history.push("/")
                                fiterBySource("") 
                                disSources("home")
                            }}
                            >All</button>
                            { namesOfSource.map((name,id)=>(
                                <button key={id} onClick={() =>{
                                    history.push("/")
                                    fiterBySource(name) 
                                    disSources(name)
                                }}
                                disabled={name === isDisSources?true:false} 
                                    
                                className={`burger-menu__btn ${name === isDisSources? "burger-menu__btn_active":''}`}>{name}</button>
                            ))}
                            
                            
                        </div>

                </header>
    );
}




export default memo(withRouter(Header));
