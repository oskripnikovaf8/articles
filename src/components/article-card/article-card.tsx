import React from 'react';
import { Link } from 'react-router-dom';
import './article-card.scss';

export const ArticleCard = ({
    id,
    image,
    title,
    description,
    text,
}: IArticleCard): JSX.Element => {
    return (
        <div className="article-card">
            <div className="article-card__media">
                <img src={image} alt={title} className="article-card__img" width="488" height="255" />
                <div className="article-card__hover-content">
                    <div className="article-card__hover-content-inner">
                        <div className="article-card__hover-text">{text}</div>
                        <Link to={`/article/${id}`} title={title} className="article-card__btn">read</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="article-card__title">{title}</h2>
                <span className="article-card__description">{description}</span>
            </div>
        </div >
    )
}
export interface IArticleCard {
    id: string;
    image: string;
    title: string;
    description: string;
    text: string;
    detail: string;
}