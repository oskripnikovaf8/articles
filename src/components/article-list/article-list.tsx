import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { ArticleCard, IArticleCard } from '../article-card/article-card';
import { useCheckMobileScreen } from '../check-mobile/useCheckMobileScreen';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';

import './article-list.scss';
import './pagination.scss';

const API_ENDPOINT = 'https://api.jsonbin.io/v3/b/63450f182b3499323bda9125/';
export const X_MASTER_KEY_VALUE = '$2b$10$z5eog.GWzzEaK9oCMwQrJOSE9lt1dsJusqWuXRtDI8oQ87KdgZ/xG';
const ITEMS_PER_PAGE = 6;

export const ArticleList = (): JSX.Element => {

    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * ITEMS_PER_PAGE;
    const displayItems = data.slice(pagesVisited, pagesVisited + ITEMS_PER_PAGE);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_ENDPOINT, { headers: { 'X-MASTER-KEY': X_MASTER_KEY_VALUE } })
            .then(res => {
                setData(res.data.record);
                setLoading(false);
            })
            .catch((error: string) => {
                console.dir(error);
                setLoading(false);
            });
    }, []);

    const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

    const changePage = (item: { selected: number }): void => {
        setPageNumber(item.selected);
    };

    return (
        <>
            <div className="grid-container">
                <div className="grid-container__col1">
                    <h1 className="title-x-large mb-1em">Article list</h1>
                    {loading && <LoadingSpinner />}
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-container__col1">
                    <div className="article-list">
                        {
                            useCheckMobileScreen() && (
                                <>
                                    <ul className="article-list__grid">
                                        {data.map((item: IArticleCard) => (
                                            <li key={`${item.id}`} className="article-list__item">
                                                <ArticleCard {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )
                        }
                        {
                            !useCheckMobileScreen() && (
                                <>
                                    <ul className="article-list__grid">
                                        {displayItems.map((item: IArticleCard) => (
                                            <li key={`${item.id}`} className="article-list__item">
                                                <ArticleCard {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                    <ReactPaginate
                                        previousLabel={"<"}
                                        nextLabel={">"}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={"pagination"}
                                        pageClassName={"pagination__item"}
                                        previousClassName={"pagination__arrow pagination__arrow-prev"}
                                        nextClassName={"pagination__arrow pagination__arrow-next"}
                                        disabledClassName={"is-disabled"}
                                        activeClassName={"is-active"}
                                    />
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="grid-container__col2">
                    <div className="banner">
                        <a href="#" title="Just banner"><img src="https://placeimg.com/300/600/animals" /></a>
                    </div>
                </div>
            </div>
        </>
    );
};
