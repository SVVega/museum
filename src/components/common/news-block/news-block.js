import React, {useEffect, useState} from "react";
import './news-block.scss'
import firstImg from '../../images/news/first-top-news.jpg'

import main1 from '../../images/news/main-news/main-news-1.jpg'
import main2 from '../../images/news/main-news/main-news-2.jpg'
import main3 from '../../images/news/main-news/main-news-3.jpg'
import main4 from '../../images/news/main-news/main-news-4.jpg'
import main5 from '../../images/news/main-news/main-news-5.jpg'
import main6 from '../../images/news/main-news/main-news-6.jpg'
import main7 from '../../images/news/main-news/main-news-7.jpg'

export const NewsBlock = ({news = [], isTopNews = false, isMainNews= false, isDate = ''}) => {

    const mainNewsPhoto = []

    if (main1) mainNewsPhoto.push(main1)
    if (main2) mainNewsPhoto.push(main2)
    if (main3) mainNewsPhoto.push(main3)
    if (main4) mainNewsPhoto.push(main4)
    if (main5) mainNewsPhoto.push(main5)
    if (main6) mainNewsPhoto.push(main6)
    if (main7) mainNewsPhoto.push(main7)

    return (news && news.length !== 0 &&
        <div className={'news'}>
            {news.map((el, idx) => {
                if (isTopNews && idx === 0) {
                    return (<div key={el?.idNews} className={'news-item'}>
                        <img className={'news-item-topImage'} src={firstImg} />
                        <div className={'news-item-title'}>{el?.titleNews}</div>
                        <div className={'news-item-date'}>{el?.dateNews}</div>
                    </div>)
                }
            return (<div key={el?.idNews} className={`news-item ${isMainNews ? 'main' : ''}`}>
                <div className={'news-item-title'}>{el?.titleNews}</div>
                <div className={'news-item-date'}>{el?.dateNews}</div>
                {isMainNews ?
                    mainNewsPhoto.map((img, index) => {
                        if (idx === index) return <img className={'news-item-mainImage'} src={img} alt={img}/>
                    }) : ''
                }
            </div>)}
            )}
        </div>
    )
}