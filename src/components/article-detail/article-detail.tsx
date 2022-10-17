import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ArticleFullCard, IArticleFullCard } from '../article-full-card/article-full-card';
import { ArticleComments as ArticleComments, IArticleComments as IArticleComments } from '../comments/comments';
import { ArticleForm } from '../form/form';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { X_MASTER_KEY_VALUE } from '../article-list/article-list';

import './article-detail.scss';

const ARTICLE_DETAIL_API_ENDPOINT = 'https://api.jsonbin.io/v3/b/63452a6765b57a31e692707a/';
const ARTICLE_COMMENTS_API_ENDPOINT = 'https://api.jsonbin.io/v3/b/63452a900e6a79321e249319/';

export const ArticleDetail = (): JSX.Element => {
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [loadingComments, setLoadingComments] = useState(true);
    const { id } = useParams();
    const [articleDetail, setArticleDetail] = useState(null as IArticleFullCard);
    const [articleComments, setArticleComments] = useState(null as IArticleComments);

    useEffect(() => {
        getArticleDetail();
        getArticleComments();
    }, []);

    const getArticleComments = (): void => {
        axios.get(ARTICLE_COMMENTS_API_ENDPOINT, { headers: { 'X-MASTER-KEY': X_MASTER_KEY_VALUE } })
            .then(res => {
                setArticleComments(res.data.record);
                setLoadingComments(false);
            })
            .catch((error: string) => {
                console.dir(error);
                setLoadingComments(false);
            });
    }

    const getArticleDetail = (): void => {
        axios.get(ARTICLE_DETAIL_API_ENDPOINT, { headers: { 'X-MASTER-KEY': X_MASTER_KEY_VALUE } })
            .then(res => {
                setArticleDetail(res.data.record);
                setLoadingDetail(false);
            })
            .catch((error: string) => {
                console.dir(error);
                setLoadingDetail(false);
            });
    }

    return (
        <>
            <div className="grid-container">
                <div className="article-detail__header">
                    <div className="title-x-large article-detail__title">Selected article</div>
                    <Link to={"/"} className="article-detail__all-link">
                        all articles
                    </Link>
                </div>
            </div>


            <div className="grid-container-detail">
                <div className="grid-container-detail__col1">
                    <div className="article-detail">
                        {(loadingDetail || loadingComments)
                            ? <LoadingSpinner />
                            : (
                                <>
                                    <ArticleFullCard {...articleDetail} />
                                    <ArticleComments {...articleComments} />
                                    <ArticleForm id={id} />
                                </>
                            )}
                    </div>
                </div>
                <div className="grid-container-detail__col2">
                    <div className="banner">
                        <a href="#" title="Banner info"><img src=" https://placeimg.com/300/600/arc" /></a>
                    </div>
                </div>
            </div>
        </>
    );

}
