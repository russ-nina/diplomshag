import React from 'react';
import "./pagination.css";

export default class Pagination extends React.Component{
    render(){
        return(
            <div className="pagination">
                <div className="page active"><a href="#">1</a></div>
                <div className="page"><a href="#">2</a></div>
                <div className="page"><a href="#">3</a></div>
                <div className="page"><a href="#">4</a></div>
                <div className="page"><a href="#">5</a></div>
            </div>
        );
    }
}