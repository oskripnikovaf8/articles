import React from 'react';

import './article-full-card.scss';

export const ArticleFullCard = ({
    title,
    image,
    data,
    labels,
    content,
}: IArticleFullCard): JSX.Element => {

    return (
        <div className="article-full-card">
            <div className="article-full-card__description">

                <div className="article-full-card__content-wrapped">
                    <h1 className="article-full-card__title">{title}</h1>
                    <ul className="article-full-card__labels">
                        {labels?.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>

                    {data && (
                        <div className="article-full-card__data">{data}</div>
                    )}
                </div>

            </div>
            <div className="article-full-card__media">
                <img src={image} alt={title} width="1000" height="300" />
            </div>
            <div className="article-full-card__content html-content" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}

export interface IArticleFullCard {
    id: string;
    title: string;
    image: string;
    data: string;
    labels: string[];
    content: string;
}
