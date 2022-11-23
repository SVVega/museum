import React, {useEffect, useState} from "react";
import ApiService from "../../services/api-service";
import {NewsBlock} from "../common";
import {format} from "date-fns";

export const ShortNews = () => {
    const [news, setNews] = useState([{idNews: '', }])

    const getNews = (async(count) => {
        return await new ApiService().getLatestNews(count)
    })

    const dateFormat = (time) => {
        return format(time, 'dd MMMM, p')
    }

    useEffect(() => {
        getNews(50).then(res => {
           const newsData = res.map((item) => {
              return {idNews: item?.id, titleNews:item?.title?.rendered, dateNews:dateFormat(new Date(item?.date))}
            })
            setNews(newsData)
        })
    }, [])

    return (
        <div className={'shortNews'}>
            <NewsBlock news={news}/>
        </div>
    )
}