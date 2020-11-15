import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const currentArticleURL = match.params.articleURL;
    const selectedArticle = articleContent.find(selectedArticle => selectedArticle.articleURL === currentArticleURL);
    
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});

    useEffect(() => {
        setArticleInfo({ upvotes: 3});
    });

    if(!selectedArticle) return <NotFoundPage />

    const otherArticles = articleContent.filter(otherArticles => otherArticles.articleURL !== currentArticleURL);

    return (
        <>
            <h1>{ selectedArticle.title } </h1>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {selectedArticle.content.map((para, key) => (
                <p key={key}>{para}</p>
            ))}
            <h3>Other Articles</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;