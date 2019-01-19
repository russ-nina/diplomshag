import React from 'react';
import "./slider.css";
import Swiper from './swiper/dist/js/swiper.esm.bundle';

export default class Slider extends React.Component{

    constructor() {
        super();
        this.state = {
            // dummy slides data (фиктивные слайды данных)
            slides: [
                    {
                        id:1,
                        title: "Hello!",
                        src:"img/slide1.png"
                    },
                    {
                        id:2,
                        title: "Hello2!",
                        src:"/img/slide2.png"
                    },
                    {
                        id:3,
                        title: "Hello3!",
                        src:"../img/slide3.png"
                    }
                ],
            // virtual data (виртуальные данные)
            virtualData: {
                slides: [],
            },
        }
    }
    componentDidMount() {
        const self = this;
        // const data = [
        //     {
        //         id:1,
        //         title: "Hello!",
        //         src:"./img/slide1.png"
        //     },
        //     {
        //         id:2,
        //         title: "Hello2!",
        //         src:"./img/slide2.png"
        //     },
        //     {
        //         id:3,
        //         title: "Hello3!",
        //         src:"./img/slide3.png"
        //     },
        // ];
        const swiper = new Swiper('.swiper-container', {
            // ...
            virtual: {
                slides: self.state.slides,
                renderExternal(data) {
                    // assign virtual slides data (назначить данные виртуальных слайдов)
                    self.setState({
                        virtualData: data,
                    });
                }
            },
        });
    }
    render(){
        return(
            <div className="slider_main_page">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {/* It is important to set "left" style prop on every slide Важно установить «левый» стиль на каждом слайде*/}
                        {this.state.virtualData.slides.map((slide, index) => (
                            <div className="swiper-slide"
                                 key={index}
                                 style={{left: `${this.state.virtualData.offset}px`}}
                            >
                                <img src={slide.src} alt=""/>
                                <p>{slide.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}