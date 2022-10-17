import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import classNames from 'classnames';
import { X_MASTER_KEY_VALUE } from '../article-list/article-list';
import './form.scss';

const SUBMIT_TEXT_SEND = 'Send';
const SUBMIT_TEXT_ERROR = 'Error';
const SUBMIT_TEXT_SUCCESS = 'Success';
const FORM_ERROR_MESSAGE = 'Fileds are not valid';
const FIELD_ERROR_MESSAGE = 'Field is not valid';

const ARTICLE_COMMENT_SENT_API_ENDPOINT = 'https://api.jsonbin.io/v3/b/634da9ca2b3499323be1e432/';

export const ArticleForm = ({ id }: IArticleForm): JSX.Element => {
    const { register, formState: { errors, isDirty }, handleSubmit, reset } = useForm({ mode: 'onChange' });

    const [submitState, setSubmitState] = useState({
        submitClassName: 'btn--ok',
        submitText: SUBMIT_TEXT_SEND,
        submitErrorText: FORM_ERROR_MESSAGE,
        isFormValid: true,
        isFormSent: false,
    });

    const { submitClassName, submitText, submitErrorText, isFormValid, isFormSent } = submitState;

    const onSubmit = (data: IData): void => {
        axios({
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
                setSubmitState({
                    ...submitState,
                    submitClassName: 'btn--success',
                    submitText: SUBMIT_TEXT_SUCCESS,
                    isFormValid: true,
                    isFormSent: true,
                });
            })
            .catch((error: string) => {
                setSubmitState({
                    ...submitState,
                    submitClassName: 'btn--error',
                    submitText: SUBMIT_TEXT_ERROR,
                });
                console.dir(error);
            });
    }

    useEffect(() => {
        if (errors.city?.type === 'required' || errors.author?.type === 'required') {
            setSubmitState({
                ...submitState,
                submitClassName: 'btn--error',
                submitText: SUBMIT_TEXT_ERROR,
                isFormValid: false,
            })
        } else {
            setSubmitState({
                ...submitState,
                submitClassName: '',
                submitText: SUBMIT_TEXT_SEND,
                isFormValid: true,
            })
        }
    }, [errors.city, errors.author]);

    useEffect(() => {
        if (isFormSent && isFormValid) {
            setSubmitState({
                ...submitState,
                submitClassName: '',
                submitText: SUBMIT_TEXT_SEND,
                isFormSent: false,
            });
        }
    }, [isDirty]);

    return (
        <>
            <h2 className="form__title">Leave your comment</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <fieldset>
                    <legend>What do you think about this article?</legend>
                    <div className="form__card">

                        <div className={classNames('form__field', { 'is-field-error': errors.author?.type === 'required' })}>
                            <label htmlFor="author">Full name<span className="form__asterix">*</span></label>
                            <input id="author" {...register("author", { required: true })} aria-invalid={errors.author ? "true" : "false"} />
                            {errors.author?.type === 'required' && <div role="alert" className="form__alert">{FIELD_ERROR_MESSAGE}</div>}
                        </div>

                        <div className={classNames('form__field', { 'is-field-error': errors.city?.type === 'required' })}>
                            <label htmlFor="city">City<span className="form__asterix">*</span></label>
                            <input id="city" {...register("city", { required: true })} aria-invalid={errors.city ? "true" : "false"} />
                            {errors.city?.type === 'required' && <div role="alert" className="form__alert">{FIELD_ERROR_MESSAGE}</div>}
                        </div>

                        <div className="form__field">
                            <label htmlFor="comment">Your comment</label>
                            <textarea id="comment" {...register("comment", { required: false })}></textarea>
                        </div>

                        <input type="submit" value={submitText} className={submitClassName} />
                        {!isFormValid && <div role="alert" className="form__alert">{submitErrorText}</div>}
                    </div>
                </fieldset>
            </form>
        </>
    )
}
export interface IArticleForm {
    id: string;
}

export interface ISubmit {
    submitClassName: string,
    submitText: string,
    submitErrorText?: string,
}

export interface IData {
    author: string,
    city: string,
    comment: string,
}
