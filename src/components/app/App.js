import './App.scss';
import {Header} from "../header/header";
import {BannerHome} from "../banner-main/banner-home";
import {AllNews} from "../all-news/all-news";

const App = () => {


    return (
        <div className={'app'}>
            <div className={'app-header-fon'}/>
            <div className={'container'}>
                <Header/>
                <BannerHome/>
                <AllNews/>
            </div>
        </div>
    );
}

export default App;
