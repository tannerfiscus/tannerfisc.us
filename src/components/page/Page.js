import React from 'react';

import { CSSTransition } from 'react-transition-group';

import Header from '../navigation/Header';

import './Page.css';

const Page = ({ children }) => (
    <div className="page">
        <div className="page-border-top" />
        <div className="page-border-right" />
        <div className="page-border-bottom" />
        <div className="page-border-left" />

        <div className="page-container">
            <Header />
            <div className="page-content">
                { children }
            </div>
        </div>
    </div>
    );

export default Page;