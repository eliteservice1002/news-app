import React,{useMemo} from 'react';
import {useSelector} from 'react-redux';
import Articles from "./articles";
import {getFilteredNews} from  "./../../store/selectors/news"


const ArticlesContainer = () => {
    const selectorPosts = useMemo(getFilteredNews,[])
    const posts = useSelector(state => selectorPosts(state))
    const isLoadingMore = useSelector(state =>state.news.IsLoadingMore)
    const numberOfNewsItems = useSelector(state =>state.news.numberOfNewsItems)
    const isLoading = useSelector(state =>state.news.isLoading)
    const currentPageCntOfNews = useSelector(state =>state.news.currentPageCntOfNews)
    
    return (
        <Articles
        posts={posts}
        isLoadingMore={isLoadingMore}
        numberOfNewsItems={numberOfNewsItems}
        isLoading={isLoading}
        currentPageCntOfNews={currentPageCntOfNews}
        />
    );
}

export default ArticlesContainer;
