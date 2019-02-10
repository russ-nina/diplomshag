import React from 'react';
import "./fullPage.css";

export default class FullPage extends React.Component{
    render(){
        return(
            <div className="container_full">
                <article className="content_full" >
                    <div className="headline_full"><h2><a href="#">{this.props.title}</a></h2></div>
                    <div className="image"><img src={this.props.img} alt={this.props.title}/></div>
                    <div className="text_full"><p>{this.props.text}</p></div>
                </article>
            </div>
        );
    }
}