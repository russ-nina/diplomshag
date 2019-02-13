import React from 'react';
import "./header.css";
import Article from "../Article/Article";

let now = new Date().toDateString();

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedMenu: false
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.hendleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.hendleScroll);
    };

    hendleScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let fixedMenu = false;

        if (this.navRefEl && this.navRefEl.getBoundingClientRect) {
            let SourceElemTop = this.navRefEl.getBoundingClientRect().top + window.pageYOffset;
            fixedMenu = window.pageYOffset > SourceElemTop;
        }

        this.setState({fixedMenu: fixedMenu});
    };

    onCategoryClick = (e) => {
        e.preventDefault();

        this.props.onCategoryClick(e.currentTarget.dataset.category);
    };

    setNavRef = (node) => {
        this.navRefEl = node;
    };

    render() {
        let fixedMenu = this.state.fixedMenu;
        let fixedClassMenu = fixedMenu ? 'navigation_fixed' : '';
        let categories = this.props.categories.map((category, index) => {
            let selectedCategory = this.props.selectedCategory;
            const activeClassName = category === selectedCategory ? `nav_active` : '';

            return <li data-category={category}
                       onClick={this.onCategoryClick}
                       key={index}
            >
                <a className={`nav ${activeClassName}`} href="#">{category}</a>
            </li>
        });

        return (
            <header>
                <div className="local_date"><a href="#">{now}</a></div>
                <div className="head">
                    <a href="#" className="site_name">
                        news&<br/>articles
                    </a>
                </div>
                <nav
                    ref={this.setNavRef}
                >
                    <ul className={`navigation ${fixedClassMenu}`} id="navigation">
                        {categories}
                    </ul>
                </nav>
            </header>
        );
    }
}