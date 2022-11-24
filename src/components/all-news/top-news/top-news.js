import React from "react"
import {NewsBlock} from "../../common";
import './top-news.scss'

export const TopNews = ({newsTop = [], isGoodNews = false}) => {



    return (
        <div className={'topNews'}>
            <div className={'topNews-column'}>
                <NewsBlock news={newsTop}
                           isTopNews={true}
                />
            </div>
            <div className={'topNews-bottom'}>
                <button>Все новости</button>
            </div>
        </div>
    )
}