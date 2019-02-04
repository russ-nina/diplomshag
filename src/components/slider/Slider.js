import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./slider.css";

export default class Slider extends Component {
    render() {
        const {slideList} = this.props;
        const slids = slideList.map((slide, index) => {
            return (
                <div
                    key={slide.id}
                >
                    <img src={slide.image}/>
                    <p className="legend">{slide.headline}</p>
                </div>
            );
        });

        return (
            <div className="slider_main_page">
                <Carousel>
                    {slids}
                </Carousel>
            </div>
        );
    }
}