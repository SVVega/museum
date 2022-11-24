import {TopNews} from "./top-news/top-news";
import {MainNews} from "./main-news/main-news";
import './all-news.scss'
import React, {useEffect, useState} from "react"
import ApiService from "../../services/api-service";
import {format} from "date-fns";


export const AllNews = ({isTypeNews}) => {

    const [newsTop, setNewsTop] = useState([])
    const [newsMain, setNewsMain] = useState([])

    const topNews = (async (count) => {
        return await new ApiService().getTopNews(count)
    })

    const topGoodNews = (async (count) => {
        return await new ApiService().getTopGoodNews(count)
    })

    const mainNews = (async (count) => {
        return await new ApiService().getMainNews(count)
    })

    const mainGoodNews = (async (count) => {
        return await new ApiService().getMainGoodNews(count)
    })

    const dateFormat = (time) => {
        return format(time, 'dd MMMM, p')
    }

    useEffect(() => {
        topNews(15).then(res => {
            const newsTopData = res.map((item, idx) => {
                if (idx === 0) { // Должно добавиться в выборку фото новости, но в параметрах api её нет
                    return {idNews: item?.id, titleNews: item?.title?.rendered, dateNews: dateFormat(new Date(item?.date))}
                }
                return {idNews: item?.id, titleNews: item?.title?.rendered, dateNews: dateFormat(new Date(item?.date))}
            })
            setNewsTop(newsTopData)
            console.log('res', res)
        })
        mainNews(7).then(res => {
            const newsMainData = res.map((item, idx) => {
                return {idNews: item?.id, titleNews: item?.title?.rendered}
            })
            setNewsMain(newsMainData)
            console.log('res', res)
        })
    }, [])

    useEffect(() => {
        if (isTypeNews === 'goodNews') {
            topGoodNews(15).then(res => {
                const newsTopData = res.map((item, idx) => {
                    return {idNews: item?.id, titleNews: item?.title?.rendered, dateNews: dateFormat(new Date(item?.date))}
                })
                setNewsTop(newsTopData)
                console.log('res', res)
            })
            mainGoodNews(7).then(res => {
                const newsMainData = res.map((item, idx) => {
                    return {idNews: item?.id, titleNews: item?.title?.rendered}
                })
                setNewsMain(newsMainData)
                console.log('res', res)
            })
        } else {
            topNews(15).then(res => {
                const newsTopData = res.map((item, idx) => {
                    if (idx === 0) { // Должно добавиться в выборку фото новости, но в параметрах api её нет
                        return {idNews: item?.id, titleNews: item?.title?.rendered, dateNews: dateFormat(new Date(item?.date))}
                    }
                    return {idNews: item?.id, titleNews: item?.title?.rendered, dateNews: dateFormat(new Date(item?.date))}
                })
                setNewsTop(newsTopData)
                console.log('res', res)
            })
            mainNews(7).then(res => {
                const newsMainData = res.map((item, idx) => {
                    return {idNews: item?.id, titleNews: item?.title?.rendered}
                })
                setNewsMain(newsMainData)
                console.log('res', res)
            })
        }
    }, [isTypeNews])

    return (
        <div className={'allNews'}>
            <div className={'allNews-wrapper'}>
                <TopNews newsTop={newsTop}/>
                <MainNews newsMain={newsMain}/>
            </div>
        </div>
    )
}