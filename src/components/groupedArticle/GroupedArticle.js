import React from 'react';
import "./groupedArticle.css";

export default class GroupedArticle  extends React.Component{
    render(){
        return(
            <div className="filter_article">
                <div className="filter_article_image"><img src={this.props.img} alt={this.props.title}/></div>
                <div className="filter_article_headline">
                    <h5>
                        <a href="#">{this.props.title}</a>
                    </h5>
                </div>
                <div className="filter_article_comment"><p>{this.props.sumcomments} Comments</p></div>
            </div>
        )
    }
}