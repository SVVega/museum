import './App.scss';
import {Header} from "../header/header";
import {BannerHome} from "../banner-main/banner-home";
import {ShortNews} from "../short-news/short-news";

const App = () => {


    return (
        <div className={'app'}>
            <div className={'app-header-fon'}/>
            <div className={'container'}>
                <Header/>
                <BannerHome/>
                <ShortNews/>
            </div>
        </div>
    );
}

export default App;
