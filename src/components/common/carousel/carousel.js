import React from "react";
import {Carousel as CarouselResponsive} from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.scss'

export const Carousel = ({images = []}) => {

    return (images && images.length !== 0 &&
        <div className={'carousel'}>
            (<CarouselResponsive
                    width={970}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    interval={7000}
                    showArrows={false}
                    showStatus={false}
                >
                        {images?.map((image, idx) => {
                        return (
                            <img key={idx} className={'carousel-img'} src={image} alt={image}/>
                        )
                    })}
                </CarouselResponsive>
            )
        </div>
    )
}