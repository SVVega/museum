import './App.scss';
import {Header} from "../header/header";
import {BannerHome} from "../banner-main/banner-home";

const App = () => {
    return (
        <div className={'app'}>
            <div className={'app-header-fon'}/>
            <div className={'container'}>
                <Header/>
                <BannerHome/>
            </div>
        </div>
    );
}

export default App;
