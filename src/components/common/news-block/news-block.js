import React from "react";
import './news-block.scss'

export const NewsBlock = ({news = []}, isDate = '') => {

    return (news && news.length !== 0 &&
        <div className={'news'}>
            {news.map((el, idx) => {
            return (<div key={el?.idNews} className={'news-item'}>
                <div className={'news-item-title'}>{el?.titleNews}</div>
                <div className={'news-item-date'}>{el?.dateNews}</div>
            </div>)}
            )}
        </div>
    )
}