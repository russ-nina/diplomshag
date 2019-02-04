import React from 'react';
import './filterCategory.css';

export default class FilterCategory extends React.Component{
    render(){
        return(
            <div className="filter_headline">
                <div className="weighty active"><p>weighty</p></div>
                <div className="popular"><p>popular</p></div>
                <div className="archived"><p>archived</p></div>
            </div>
        );
    }
}