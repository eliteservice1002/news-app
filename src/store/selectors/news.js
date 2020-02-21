import { createSelector } from "reselect";
import orderBy from 'lodash/orderBy';


const news = state => state.news.news;
const inputValue = state => state.filter.inputValue;
const type = state => state.filter.type;
const sourceToFilter = state => state.filter.sourceToFilter;

export const mainNews = createSelector(
    [news],
    news => news
)
export const inputValueSelector = createSelector(
    [inputValue],
    value => value
)




 const newsFilteredByType = createSelector(
    [type,news],
    (type,news) =>{
    console.log("TCL: type", type)
        switch (type) {
            case "latest":
            return orderBy(news,"publishedAt","desc")
            case "alphabetically":
                return orderBy(news,"title","asc")
            default:
            return news
        }
        
    }
    
)

export const getFilteredNews  = () =>
        createSelector(
            [newsFilteredByType,inputValue,sourceToFilter],
            (news,value,type) => {
                if(type !== ""){
                    return news.filter( o => o.source.name.toLowerCase().indexOf(type.toLowerCase()) >= 0)
                }else if(value !==""){
                    return news.filter( o => o.title.toLowerCase().indexOf(value.toLowerCase()) >= 0)
                }else{
                    return news
                }
                
            }
        )



export const getSingleFilteredNews = () =>

        createSelector(
            [getFilteredNews(),
            (_,match) =>match.params.url],
            (news,url) =>{
                return news[url]
            }
        )






