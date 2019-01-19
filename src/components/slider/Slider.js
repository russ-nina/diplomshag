import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

export default class Slider extends Component {
    render() {
        const {slideList} = this.props;
        const slids = slideList.map((slide, index) => {
            return (
                <div
                    key={slide.id}
                >
                    <img src={slide.src}/>
                    <p className="legend">{slide.title}</p>
                </div>
            );
        });

        return (
            <Carousel>
                {slids}
            </Carousel>
        );
    }
}