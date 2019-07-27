import React from 'react';

import Page from '../page/Page';

const PageNotFound = () => (
    <Page pageTitle="Page Not Found">
        <h1>
            <span aria-label="Grimacing, dizzy, and sob emojis" role="img">😬 😵 😭</span>
        </h1>
        <br />
        <h2>Uh oh.</h2>
        <p>I admit that I wish this hadn't happened, as the content you're requesting has either been misplaced or does not exist.</p>
        <p>It's likely that I'd feel the emotion of one of these three emojis based on this experience, but let's start fresh by trying one of the available links above. <span aria-label="Okay hand emoji" role="img">👌</span></p>
        <br /><br />
        <h2>Have a great day! 
            <span aria-label="Peace hand, smiley face, and sun emoji" role="img">✌😊☀️</span>
        </h2>
    </Page>
);

export default PageNotFound;