import React from 'react';
import "./fullArticle.css";
import Slider from '../slider/Slider';

export default class FullArticle extends React.Component{
    render(){
        return(
            <div className="container_full">
                <article className="content_full" >
                    <div className="headline_full"><h2><a href="#">{this.props.title}</a></h2></div>
                    <div className="info_full">
                        <div className="date_full"><i className="material-icons md-18 beluga">calendar_today</i>
                            <p>{this.props.date}</p></div>
                        <div className="author_full"><i className="material-icons md-18 beluga">person</i><p>By <a
                            className="coral" href="#">{this.props.author}</a></p></div>
                        <div className="rank_full"><i className="material-icons md-18 beluga">folder</i><p>In <a
                            className="coral" href="#">{this.props.rank}</a></p></div>
                        <div className="tags_full"><i className="material-icons md-18 beluga">local_offer</i><p>Tags: <a
                            className="coral" href="#">{this.props.tags}</a></p></div>
                    </div>
                    <Slider
                        slideList={this.props.slides_img}
                    />
                    <div className="text_full"><p>{this.props.text}</p></div>
                </article>
            </div>
        );
    }
}