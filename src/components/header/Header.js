import React from 'react';
import "./header.css";

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="local_date"><a href="#">06 January 2019</a></div>
                <div className="head">
                    <a href="#" className="site_name">
                        news&<br/>articles
                    </a>
                </div>
                <nav>
                    <ul className="navigation">
                        <li><a className="nav nav_active" href="#">Home</a></li>
                        <li><a className="nav" href="#">World</a></li>
                        <li><a className="nav" href="#">Sport</a></li>
                        <li><a className="nav" href="#">Weather</a></li>
                        <li><a className="nav" href="#">Stories</a></li>
                        <li><a className="nav" href="#">Politics</a></li>
                        <li><a className="nav" href="#">Other</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}