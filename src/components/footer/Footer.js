import React from 'react';
import './footer.css';
import './sprite/sprite.css';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="footer_cover">
                    <div className="footer_left_side">
                        <div className="main_info">
                            <div className="our_history"><p>Our history</p></div>
                            <div className="our_team"><p>Our team</p></div>
                            <div className="how_we_do_it"><p>How we do it</p></div>
                            <div className="contacts"><p>Contacts</p></div>
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