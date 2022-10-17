import React from 'react'
import { ArticleComment } from '../comment/comment';

export const ArticleComments = ({ comments }: IArticleComments): JSX.Element => {
    return (
        <ul className="article-comments">
            {comments?.map((item: IArticleComment) => (
                <li key={`${item.id}`} className="article-comment">
                    <ArticleComment {...item} />
                </li>
            ))}
        </ul>
    )
}

export interface IArticleComments {
    pid: number;
    comments: IArticleComment[];
}

export interface IArticleComment {
    id: number;
    author: string;
    description: string;
    comment: string;
    image?: string;
}