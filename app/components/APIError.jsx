import React     from 'react';

const APIError = ( { content }, context) => {

    return (
        <div className="api-error align-center">
            <h2><i className="twa twa-confused"></i></h2>
            <h3>There was a problem loading { content }.</h3>
            <p>Mistakes happen, right? I&#39;m very sorry that this had to happen to you.</p>
            <p><a className="button" href="/contact/">Report a Problem</a></p>
        </div>
    );
}

export default APIError;
