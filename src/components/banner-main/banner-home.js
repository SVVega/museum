import {Carousel} from "../common";
import './banner-home.scss'
import img1 from '../images/banner/img-1.jpg'
import img2 from '../images/banner/img-2.jpg'
import img3 from '../images/banner/img-3.jpg'

const imagesForBanner = []

if (img1) imagesForBanner.push(img1)
if (img2) imagesForBanner.push(img2)
if (img3) imagesForBanner.push(img3)

export const BannerHome = () => {

    return ( imagesForBanner && imagesForBanner.length !== 0 &&
        <div className={'banner'}>
            <Carousel images={imagesForBanner}/>
        </div>
    )
}