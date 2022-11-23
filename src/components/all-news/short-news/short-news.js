import React from "react"
import {NewsBlock} from "../../common";
import './short-news.scss'

export const ShortNews = ({newsTop = []}) => {

    return (
        <div className={'topNews'}>
            <div className={'topNews-column'}>
                <NewsBlock news={newsTop}/>
            </div>
            <div className={'topNews-bottom'}>
                <button>Все новости</button>
            </div>
        </div>
    )
}