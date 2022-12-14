import './main-news.scss'
import {NewsBlock} from "../../common";
import React from "react";

export const MainNews = ({newsMain = []}) => {

    return (
        <div className={'mainNews'}>
            <div className={'mainNews-wrapper'}>
                <div className={'mainNews-heading'}>
                    Главные новости
                </div>
                <div className={'mainNews-title'}>
                    <NewsBlock news={newsMain} isMainNews={true}/>
                </div>

            </div>
        </div>
    )
}