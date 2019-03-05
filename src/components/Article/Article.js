import React from 'react';
import "./article.css";

export default class Article extends React.Component{
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
            <article className="content" onClick={this.props.onArticleClick}>
                <div className="image"><img src={this.props.img} alt={this.props.rank}/></div>
                <div className="headline"><h2><a href="#">{this.props.title}</a></h2></div>
                <div className="info">
                    <div className="date"><i className="material-icons md-18 beluga">calendar_today</i>
                        <p>{this.props.date}</p></div>
                    <div className="author"><i className="material-icons md-18 beluga">person</i><p>By <a
                        className="coral" data-author={dataAuthor} onClick={this.onAuthorClick} href="#">{this.props.author}</a></p></div>
                    <div className="rank"><i className="material-icons md-18 beluga">folder</i><p>In <a
                        className="coral" data-category={this.props.rank.toLowerCase()} onClick={this.onCategoryClick}href="#">{this.props.rank}</a></p></div>
                    <div className="tags"><i className="material-icons md-18 beluga">local_offer</i><p>Tags: <a
                        className="coral" href="#" data-tag={this.props.tags.toLowerCase()} onClick={this.onTagClick}>{this.props.tags}</a></p></div>
                </div>
                <div className="description"><p>{this.props.description}...<span className="read_all">read all...</span></p></div>
            </article>
        );
    }
}