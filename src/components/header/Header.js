import React from 'react';
import "./header.css";
import Article from "../Article/Article";

export default class Header extends React.Component{
    onCategoryClick = (e) => {
        e.preventDefault();

        this.props.onCategoryClick(e.currentTarget.dataset.category);
    };

    render(){
        let categories = this.props.categories.map((category, index) => {
            const activeClassName = category === this.props.selectedCategory ? `nav_active` : '';

            return <li data-category={category}
                       onClick={this.onCategoryClick}
                       key={index}
            >
                <a className={`nav ${activeClassName}`} href="#">{category}</a>
            </li>
        });

        return(
            <header>
                <div className="local_date"><a href="#">06 January 2019</a></div>
                <div className="head">
                    <a href="#" className="site_name">
                        news&<br/>articles
                    </a>
                </div>
                <nav>
                    <ul className="navigation ">
                        {categories}
                    </ul>
                </nav>
            </header>
        );
    }
}