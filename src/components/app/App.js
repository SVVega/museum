import './App.scss';
import {Header} from "../header/header";
import {BannerHome} from "../banner-main/banner-home";
import {AllNews} from "../all-news/all-news";
import {Footer} from "../footer/footer";
import React, {useState} from "react";

const App = () => {

    const [typeNews, setTypeNews] = useState('allNews')

    return (
        <div className={'app'}>
            <div className={'app-header-fon'}/>
            <div className={'container'}>
                <Header isTypeNews={(value) => setTypeNews(value)}/>
                <BannerHome/>
                <AllNews isTypeNews={typeNews}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
