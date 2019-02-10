import React from 'react';
import './footer.css';
import './sprite/sprite.css';
import Preloader from '../spiner/Preloader';

export default class Footer extends React.Component{
    onPageClick = (page) => {
        this.props.onPageClick(page);
        // let activeClassName = page === this.props.selectedPage ? `nav_active` : '';
    };
    render(){
        let activeClassName = "";
        let pages = this.props.pages;
        if (pages === undefined){
            pages = <Preloader/>;
        } else if (pages.length){
            pages = pages.map((page, index) => {
                return <div
                    key={page.id}
                    onClick={() => this.onPageClick(page)}
                    data-page={page.alias}
                    className={`footer_pages ${activeClassName}`}>
                    <p>{page.title}</p>
                </div>
            });
        } else {
            pages = <div>Нет страниц</div>
        }
        return(
            <footer className="footer">
                <div className="footer_cover">
                    <div className="footer_left_side">
                        <div className="main_info">
                            {pages}
                        </div>
                        <div className="copyright"><p>Copyright 2019 | All Right Reserved by Nina</p></div>
                    </div>
                    <div className="footer_right_side">
                        <div className="we_are_in_social_networks"><p>we are in social networks</p></div>
                        <ul className="social_networks">
                            <li className="in_social"><i className="icon icon-facebook"></i></li>
                            <li className="in_social"><i className="icon icon-twitter"></i></li>
                            <li className="in_social"><i className="icon icon-youtube"></i></li>
                            <li className="in_social"><i className="icon icon-linkedin"></i></li>
                    </ul>
                </div>
            </div>
            </footer>
        );
    }
}