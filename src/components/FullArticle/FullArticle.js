import React from 'react';
import "./fullArticle.css";

export default class FullArticle extends React.Component{
    render(){
        return(
            <article className="content" >
                <div className="image"><img src={this.props.img} alt={this.props.rank}/></div>
                <div className="headline"><h2><a href="#">{this.props.title}</a></h2></div>
                <div className="info">
                    <div className="date"><i className="material-icons md-18 beluga">calendar_today</i>
                        <p>{this.props.date}</p></div>
                    <div className="author"><i className="material-icons md-18 beluga">person</i><p>By <a
                        className="coral" href="#">{this.props.author}</a></p></div>
                    <div className="rank"><i className="material-icons md-18 beluga">folder</i><p>In <a
                        className="coral" href="#">{this.props.rank}</a></p></div>
                    <div className="tags"><i className="material-icons md-18 beluga">local_offer</i><p>Tags: <a
                        className="coral" href="#">{this.props.tags}</a></p></div>
                </div>
                <div className="text"><p>{this.props.text}</p></div>
            </article>
        );
    }
}