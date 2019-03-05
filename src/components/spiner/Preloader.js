import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import './preloader.css';
export default class Preloader  extends Component {
    render() {
        return (
            <div className="container">
                <div className="spinner_cover">
                    <Spinner size={80} spinnerColor={"#ff6f61"} spinnerWidth={2} visible={true} />
                </div>
            </div>
        );
    }
}