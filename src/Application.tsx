import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Routes, Route } from "react-router-dom";
import { ArticleList } from './components/article-list/article-list';
import { ArticleDetail } from './components/article-detail/article-detail';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import './Application.scss';

const Application: React.FC = () => {
    return (
        <main>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<ArticleList />} />
                    <Route path="/article/:id" element={<ArticleDetail />} />
                </Routes>
            </HashRouter>
        </main>
    );
};

export default hot(module)(Application);
