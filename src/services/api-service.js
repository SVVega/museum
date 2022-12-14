import axios from "axios";

export default class ApiService {

    apiBase = 'http://turgenevmus.ru/wp-json/wp/v2'

    getResource = (url = '') => {
        // const data = axios.get(`${this.apiBase}${url}`)
        return axios.get(`${this.apiBase}${url}`)
            .then((res) => {
               return res?.data
            })
            // data.then((res) => console.log('res', res))
            .catch(err => console.log('getPage', err));
    }

    getTopNews(countNews = 10) { // Выводит в зависимости количества постов
        return this.getResource(`/posts?per_page=${countNews}`)
    }

    getTopGoodNews(countNews = 10) { // Выводит в зависимости количества постов
        return this.getResource(`/posts?per_page=${countNews}&categories=44`)
    }

    getMainNews(countNews = 10) { // Выводит в зависимости количества постов и типа категории
        return this.getResource(`/posts?per_page=${countNews}&offset=${30}`)
    }

    getMainGoodNews(countNews = 10) { // Выводит в зависимости количества постов и типа категории
        return this.getResource(`/posts?per_page=${countNews}&offset=${30}&categories=45`)
    }

}

