import React from 'react';
import "./header.css";
import Article from "../Article/Article";

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

        let fixedElem = this.navRefEl;
        let fixedElemSourceTop = fixedElem.getBoundingClientRect().top + window.pageYOffset;
        let fixedMenu = window.pageYOffset > fixedElemSourceTop;

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
                <div className="local_date"><a href="#">06 January 2019</a></div>
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