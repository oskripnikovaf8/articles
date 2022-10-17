(self["webpackChunk_1tv_test"] = self["webpackChunk_1tv_test"] || []).push([[179],{

/***/ 597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_Application)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js
var react_hot_loader_production_min = __webpack_require__(209);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(250);
// EXTERNAL MODULE: ./node_modules/react-paginate/dist/react-paginate.js
var react_paginate = __webpack_require__(358);
var react_paginate_default = /*#__PURE__*/__webpack_require__.n(react_paginate);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/components/article-card/article-card.tsx



const ArticleCard = ({ id, image, title, description, text, }) => {
    return (react.createElement("div", { className: "article-card" },
        react.createElement("div", { className: "article-card__media" },
            react.createElement("img", { src: image, alt: title, className: "article-card__img", width: "488", height: "255" }),
            react.createElement("div", { className: "article-card__hover-content" },
                react.createElement("div", { className: "article-card__hover-content-inner" },
                    react.createElement("div", { className: "article-card__hover-text" }, text),
                    react.createElement(dist/* Link */.rU, { to: `/article/${id}`, title: title, className: "article-card__btn" }, "read")))),
        react.createElement("div", null,
            react.createElement("h2", { className: "article-card__title" }, title),
            react.createElement("span", { className: "article-card__description" }, description))));
};

;// CONCATENATED MODULE: ./src/components/check-mobile/useCheckMobileScreen.ts

const useCheckMobileScreen = () => {
    const [width, setWidth] = (0,react.useState)(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    (0,react.useEffect)(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    return (width <= 743);
};

;// CONCATENATED MODULE: ./src/components/loading-spinner/loading-spinner.tsx


const LoadingSpinner = () => {
    return (react.createElement("div", null,
        react.createElement("div", { className: "loading-spinner" },
            react.createElement("div", { className: "spinner-loader" }))));
};

;// CONCATENATED MODULE: ./src/components/article-list/article-list.tsx








const API_ENDPOINT = 'https://api.jsonbin.io/v3/b/63450f182b3499323bda9125/';
const X_MASTER_KEY_VALUE = '$2b$10$z5eog.GWzzEaK9oCMwQrJOSE9lt1dsJusqWuXRtDI8oQ87KdgZ/xG';
const ITEMS_PER_PAGE = 6;
const ArticleList = () => {
    const [data, setData] = (0,react.useState)([]);
    const [pageNumber, setPageNumber] = (0,react.useState)(0);
    const pagesVisited = pageNumber * ITEMS_PER_PAGE;
    const displayItems = data.slice(pagesVisited, pagesVisited + ITEMS_PER_PAGE);
    const [loading, setLoading] = (0,react.useState)(true);
    (0,react.useEffect)(() => {
        axios_default().get(API_ENDPOINT, { headers: { 'X-MASTER-KEY': X_MASTER_KEY_VALUE } })
            .then(res => {
            setData(res.data.record);
            setLoading(false);
        })
            .catch((error) => {
            console.dir(error);
            setLoading(false);
        });
    }, []);
    const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);
    const changePage = (item) => {
        setPageNumber(item.selected);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "grid-container" },
            react.createElement("div", { className: "grid-container__col1" },
                react.createElement("h1", { className: "title-x-large mb-1em" }, "Article list"),
                loading && react.createElement(LoadingSpinner, null))),
        react.createElement("div", { className: "grid-container" },
            react.createElement("div", { className: "grid-container__col1" },
                react.createElement("div", { className: "article-list" },
                    useCheckMobileScreen() && (react.createElement(react.Fragment, null,
                        react.createElement("ul", { className: "article-list__grid" }, data.map((item) => (react.createElement("li", { key: `${item.id}`, className: "article-list__item" },
                            react.createElement(ArticleCard, Object.assign({}, item)))))))),
                    !useCheckMobileScreen() && (react.createElement(react.Fragment, null,
                        react.createElement("ul", { className: "article-list__grid" }, displayItems.map((item) => (react.createElement("li", { key: `${item.id}`, className: "article-list__item" },
                            react.createElement(ArticleCard, Object.assign({}, item)))))),
                        react.createElement((react_paginate_default()), { previousLabel: "<", nextLabel: ">", pageCount: pageCount, onPageChange: changePage, containerClassName: "pagination", pageClassName: "pagination__item", previousClassName: "pagination__arrow pagination__arrow-prev", nextClassName: "pagination__arrow pagination__arrow-next", disabledClassName: "is-disabled", activeClassName: "is-active" }))))),
            react.createElement("div", { className: "grid-container__col2" },
                react.createElement("div", { className: "banner" },
                    react.createElement("a", { href: "#", title: "Just banner" },
                        react.createElement("img", { src: "https://placeimg.com/300/600/animals" })))))));
};

;// CONCATENATED MODULE: ./src/components/article-full-card/article-full-card.tsx


const ArticleFullCard = ({ title, image, data, labels, content, }) => {
    return (react.createElement("div", { className: "article-full-card" },
        react.createElement("div", { className: "article-full-card__description" },
            react.createElement("div", { className: "article-full-card__content-wrapped" },
                react.createElement("h1", { className: "article-full-card__title" }, title),
                react.createElement("ul", { className: "article-full-card__labels" }, labels === null || labels === void 0 ? void 0 : labels.map((item, index) => {
                    return react.createElement("li", { key: index }, item);
                })),
                data && (react.createElement("div", { className: "article-full-card__data" }, data)))),
        react.createElement("div", { className: "article-full-card__media" },
            react.createElement("img", { src: image, alt: title, width: "1000", height: "300" })),
        react.createElement("div", { className: "article-full-card__content html-content", dangerouslySetInnerHTML: { __html: content } })));
};

;// CONCATENATED MODULE: ./src/components/comment/comment.tsx


const ArticleComment = ({ author, description, comment, image }) => {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "article-comment__author-area" },
            image && (react.createElement("div", { className: "article-comment__image" },
                react.createElement("img", { src: image, alt: author }))),
            react.createElement("div", null,
                react.createElement("h2", { className: "article-comment__author" }, author),
                react.createElement("div", { className: "article-comment__description" }, description))),
        react.createElement("div", { className: "article-comment__comment" }, comment)));
};

;// CONCATENATED MODULE: ./src/components/comments/comments.tsx


const ArticleComments = ({ comments }) => {
    return (react.createElement("ul", { className: "article-comments" }, comments === null || comments === void 0 ? void 0 : comments.map((item) => (react.createElement("li", { key: `${item.id}`, className: "article-comment" },
        react.createElement(ArticleComment, Object.assign({}, item)))))));
};

// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(439);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/form/form.tsx






const SUBMIT_TEXT_SEND = 'Send';
const SUBMIT_TEXT_ERROR = 'Error';
const SUBMIT_TEXT_SUCCESS = 'Success';
const FORM_ERROR_MESSAGE = 'Fileds are not valid';
const FIELD_ERROR_MESSAGE = 'Field is not valid';
const ARTICLE_COMMENT_SENT_API_ENDPOINT = 'https://api.jsonbin.io/v3/b/634da9ca2b3499323be1e432/';
const ArticleForm = ({ id }) => {
    var _a, _b, _c, _d;
    const { register, formState: { errors, isDirty }, handleSubmit, reset } = (0,index_esm/* useForm */.cI)({ mode: 'onChange' });
    const [submitState, setSubmitState] = (0,react.useState)({
        submitClassName: 'btn--ok',
        submitText: SUBMIT_TEXT_SEND,
        submitErrorText: FORM_ERROR_MESSAGE,
        isFormValid: true,
        isFormSent: false,
    });
    const { submitClassName, submitText, submitErrorText, isFormValid, isFormSent } = submitState;
    const onSubmit = (data) => {
        axios_default()({
            method: 'put',
            headers: {
                'X-MASTER-KEY': X_MASTER_KEY_VALUE,
                'Content-Type': 'application/json',
            },
            url: ARTICLE_COMMENT_SENT_API_ENDPOINT,
            data,
        })
            .then(() => {
            reset({ author: '', comment: '', city: '' });
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: 'btn--success', submitText: SUBMIT_TEXT_SUCCESS, isFormValid: true, isFormSent: true }));
        })
            .catch((error) => {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: 'btn--error', submitText: SUBMIT_TEXT_ERROR }));
            console.dir(error);
        });
    };
    (0,react.useEffect)(() => {
        var _a, _b;
        if (((_a = errors.city) === null || _a === void 0 ? void 0 : _a.type) === 'required' || ((_b = errors.author) === null || _b === void 0 ? void 0 : _b.type) === 'required') {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: 'btn--error', submitText: SUBMIT_TEXT_ERROR, isFormValid: false }));
        }
        else {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: '', submitText: SUBMIT_TEXT_SEND, isFormValid: true }));
        }
    }, [errors.city, errors.author]);
    (0,react.useEffect)(() => {
        if (isFormSent && isFormValid) {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: '', submitText: SUBMIT_TEXT_SEND, isFormSent: false }));
        }
    }, [isDirty]);
    return (react.createElement(react.Fragment, null,
        react.createElement("h2", { className: "form__title" }, "Leave your comment"),
        react.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "form" },
            react.createElement("fieldset", null,
                react.createElement("legend", null, "What do you think about this article?"),
                react.createElement("div", { className: "form__card" },
                    react.createElement("div", { className: classnames_default()('form__field', { 'is-field-error': ((_a = errors.author) === null || _a === void 0 ? void 0 : _a.type) === 'required' }) },
                        react.createElement("label", { htmlFor: "author" },
                            "Full name",
                            react.createElement("span", { className: "form__asterix" }, "*")),
                        react.createElement("input", Object.assign({ id: "author" }, register("author", { required: true }), { "aria-invalid": errors.author ? "true" : "false" })),
                        ((_b = errors.author) === null || _b === void 0 ? void 0 : _b.type) === 'required' && react.createElement("div", { role: "alert", className: "form__alert" }, FIELD_ERROR_MESSAGE)),
                    react.createElement("div", { className: classnames_default()('form__field', { 'is-field-error': ((_c = errors.city) === null || _c === void 0 ? void 0 : _c.type) === 'required' }) },
                        react.createElement("label", { htmlFor: "city" },
                            "City",
                            react.createElement("span", { className: "form__asterix" }, "*")),
                        react.createElement("input", Object.assign({ id: "city" }, register("city", { required: true }), { "aria-invalid": errors.city ? "true" : "false" })),
                        ((_d = errors.city) === null || _d === void 0 ? void 0 : _d.type) === 'required' && react.createElement("div", { role: "alert", className: "form__alert" }, FIELD_ERROR_MESSAGE)),
                    react.createElement("div", { className: "form__field" },
                        react.createElement("label", { htmlFor: "comment" }, "Your comment"),
                        react.createElement("textarea", Object.assign({ id: "comment" }, register("comment", { required: false })))),
                    react.createElement("input", { type: "submit", value: submitText, className: submitClassName }),
                    !isFormValid && react.createElement("div", { role: "alert", className: "form__alert" }, submitErrorText))))));
};

;// CONCATENATED MODULE: ./src/components/article-detail/article-detail.tsx









const ARTICLE_DETAIL_API_ENDPOINT = 'https://api.jsonbin.io/v3/b/63452a6765b57a31e692707a/';
const ARTICLE_COMMENTS_API_ENDPOINT = 'https://api.jsonbin.io/v3/b/63452a900e6a79321e249319/';
const ArticleDetail = () => {
    const [loadingDetail, setLoadingDetail] = (0,react.useState)(true);
    const [loadingComments, setLoadingComments] = (0,react.useState)(true);
    const { id } = (0,react_router_dist/* useParams */.UO)();
    const [articleDetail, setArticleDetail] = (0,react.useState)(null);
    const [articleComments, setArticleComments] = (0,react.useState)(null);
    (0,react.useEffect)(() => {
        getArticleDetail();
        getArticleComments();
    }, []);
    const getArticleComments = () => {
        axios_default().get(ARTICLE_COMMENTS_API_ENDPOINT, { headers: { 'X-MASTER-KEY': X_MASTER_KEY_VALUE } })
            .then(res => {
            setArticleComments(res.data.record);
            setLoadingComments(false);
        })
            .catch((error) => {
            console.dir(error);
            setLoadingComments(false);
        });
    };
    const getArticleDetail = () => {
        axios_default().get(ARTICLE_DETAIL_API_ENDPOINT, { headers: { 'X-MASTER-KEY': X_MASTER_KEY_VALUE } })
            .then(res => {
            setArticleDetail(res.data.record);
            setLoadingDetail(false);
        })
            .catch((error) => {
            console.dir(error);
            setLoadingDetail(false);
        });
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "grid-container" },
            react.createElement("div", { className: "article-detail__header" },
                react.createElement("div", { className: "title-x-large article-detail__title" }, "Selected article"),
                react.createElement(dist/* Link */.rU, { to: "/", className: "article-detail__all-link" }, "all articles"))),
        react.createElement("div", { className: "grid-container-detail" },
            react.createElement("div", { className: "grid-container-detail__col1" },
                react.createElement("div", { className: "article-detail" }, (loadingDetail || loadingComments)
                    ? react.createElement(LoadingSpinner, null)
                    : (react.createElement(react.Fragment, null,
                        react.createElement(ArticleFullCard, Object.assign({}, articleDetail)),
                        react.createElement(ArticleComments, Object.assign({}, articleComments)),
                        react.createElement(ArticleForm, { id: id }))))),
            react.createElement("div", { className: "grid-container-detail__col2" },
                react.createElement("div", { className: "banner" },
                    react.createElement("a", { href: "#", title: "Banner info" },
                        react.createElement("img", { src: " https://placeimg.com/300/600/arc" })))))));
};

;// CONCATENATED MODULE: ./src/components/scroll-to-top/scroll-to-top.ts


const ScrollToTop = () => {
    const { pathname } = (0,react_router_dist/* useLocation */.TH)();
    (0,react.useEffect)(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

;// CONCATENATED MODULE: ./src/Application.tsx
/* module decorator */ module = __webpack_require__.hmd(module);







const Application = () => {
    return (react.createElement("main", null,
        react.createElement(dist/* HashRouter */.UT, null,
            react.createElement(ScrollToTop, null),
            react.createElement(react_router_dist/* Routes */.Z5, null,
                react.createElement(react_router_dist/* Route */.AW, { path: "/", element: react.createElement(ArticleList, null) }),
                react.createElement(react_router_dist/* Route */.AW, { path: "/article/:id", element: react.createElement(ArticleDetail, null) })))));
};
/* harmony default export */ const src_Application = ((0,react_hot_loader_production_min/* hot */.wU)(module)(Application));


/***/ }),

/***/ 535:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./src/Application.tsx + 10 modules
var Application = __webpack_require__(597);
;// CONCATENATED MODULE: ./src/utils/helpers.ts
/**
 * Checks if process NODE_ENV in 'development' mode
 */
function inDev() {
    return "production" == 'development';
}

// EXTERNAL MODULE: ./node_modules/what-input/dist/what-input.js
var what_input = __webpack_require__(474);
var what_input_default = /*#__PURE__*/__webpack_require__.n(what_input);
;// CONCATENATED MODULE: ./src/main.tsx
/* module decorator */ module = __webpack_require__.hmd(module);





if (what_input_default().ask('intent') !== 'touch') {
    document.documentElement.classList.add('can-hover');
}
// Application to Render
const app = react.createElement(Application/* default */.Z, null);
// Render application in DOM
react_dom.render(app, document.getElementById('app'));
// Hot module replacement
if (inDev() && module.hot)
    module.hot.accept();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(535)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);