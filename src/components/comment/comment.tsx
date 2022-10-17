import React from 'react'
import { IArticleComment } from '../comments/comments';
import './comment.scss';

export const ArticleComment = ({
    author,
    description,
    comment,
    image
}: IArticleComment): JSX.Element => {
    return (
        <>
            <div className="article-comment__author-area">
                {image && (
                    <div className="article-comment__image">
                        <img src={image} alt={author} />
                    </div>
                )}
                <div>
                    <h2 className="article-comment__author">{author}</h2>
                    <div className="article-comment__description">{description}</div>
                </div>
            </div>

            <div className="article-comment__comment">{comment}</div>
        </>
    )
}
