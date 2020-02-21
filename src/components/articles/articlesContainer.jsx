import React,{useMemo} from 'react';
import {useSelector} from 'react-redux';
import Articles from "./articles";
import {getFilteredNews} from  "./../../store/selectors/news"


const ArticlesContainer = () => {
    const selectorPosts = useMemo(getFilteredNews,[])
    const posts = useSelector(state => selectorPosts(state))

    return (
        <Articles
        posts={posts}
        />
    );
}

export default ArticlesContainer;
