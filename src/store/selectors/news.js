import { createSelector } from "reselect";
import orderBy from 'lodash/orderBy';


const news = state => state.news.news;
const inputValue = state => state.filter.inputValue;
const type = state => state.filter.type;
// const arrOfSources = state => state.filter.arrOfSources;

// const url = (getFilteredNews,url) => [url]

export const mainNews = createSelector(
    [news],
    news => news
)


const newsFilteredByinput  = createSelector(
    [news,inputValue],
    (news,value) => news.filter( o => o.title.toLowerCase().indexOf(value.toLowerCase()) >= 0)
)

export const getFilteredNews = createSelector(
    [newsFilteredByinput,type,news],
    (newsFilteredByinput,type,news) =>{
        if(type == "latest"){
            return orderBy(newsFilteredByinput,"publishedAt","desc")
        }else if(type == "alphabetically"){
            return orderBy(newsFilteredByinput,"title","asc")
        }else if(newsFilteredByinput.some(s =>s.source.name == type) ){
            return newsFilteredByinput.filter( o => o.source.name.toLowerCase().indexOf(type.toLowerCase()) >= 0)
        }else{
            return newsFilteredByinput
        }
        
    }
    
)

// export const getSingleFilteredNews = createSelector(
//     [getFilteredNews],
//     (news,a) => console.log("TCL: news", a)
// )






