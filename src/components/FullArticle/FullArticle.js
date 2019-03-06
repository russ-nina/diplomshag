import React from 'react';
import "./fullArticle.css";
import Slider from '../slider/Slider';

export default class FullArticle extends React.Component{
    onTagClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onTagClick(e.currentTarget.dataset.tag);
    };
    onAuthorClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onAuthorClick(e.currentTarget.dataset.author);
    };
    onCategoryClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onCategoryClick(e.currentTarget.dataset.category);
        console.log(e.currentTarget.dataset.category)
    };
    render(){
        let dataAuthor = this.props.author.toLowerCase().split(' ').join('-');
        return(
            <div className="container_full">
                <article className="content_full" >
                    <div className="headline_full"><h2><a href="#">{this.props.title}</a></h2></div>
                    <div className="info_full">
                        <div className="date_full"><i className="material-icons md-18 beluga">calendar_today</i>
                            <p>{this.props.date}</p></div>
                        <div className="author_full"><i className="material-icons md-18 beluga">person</i><p>By <a
                            className="coral" href="#"data-author={dataAuthor} onClick={this.onAuthorClick}>{this.props.author}</a></p></div>
                        <div className="rank_full"><i className="material-icons md-18 beluga">folder</i><p>In <a
                            className="coral" href="#" data-category={this.props.rank.toLowerCase()} onClick={this.onCategoryClick}>{this.props.rank}</a></p></div>
                        <div className="tags_full"><i className="material-icons md-18 beluga">local_offer</i><p>Tags: <a
                            className="coral" href="#" data-tag={this.props.tags.toLowerCase()} onClick={this.onTagClick}>{this.props.tags}</a></p></div>
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