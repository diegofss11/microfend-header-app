import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const App = ({ headerHtml, sidebarHtml, contentHtml }) => {
    return (
        <div className="homepage">
            <div className="header" dangerouslySetInnerHTML={{ __html: headerHtml }}></div>
            <div className="sidebar" dangerouslySetInnerHTML={{ __html: sidebarHtml }}></div>
            <div className="content" dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
        </div>
    );
}

App.getInitialProps = async ({ req }) => {
    const header = await fetch('https://microfend-header.herokuapp.com/');
    const headerHtml = await header.text();

    const content = await fetch('https://microfend-content.herokuapp.com/');
    const contentHtml = await content.text();

    const sidebar = await fetch('https://microfend-sidebar.herokuapp.com/');
    const sidebarHtml = await sidebar.text();
    
    return { headerHtml, contentHtml, sidebarHtml };
}

export default App;