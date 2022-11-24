import './App.scss';
import {Header} from "../header/header";
import {BannerHome} from "../banner-main/banner-home";
import {AllNews} from "../all-news/all-news";
import {Footer} from "../footer/footer";

const App = () => {


    return (
        <div className={'app'}>
            <div className={'app-header-fon'}/>
            <div className={'container'}>
                <Header/>
                <BannerHome/>
                <AllNews/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
