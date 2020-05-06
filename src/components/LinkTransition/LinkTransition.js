import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const LinkTransition = props => {
    return (
        <TransitionLink
            {...props}
            exit={{ length: 1 }}
            entry={{
                length: 1,
                state: {
                    isLinkClick: true,
                }
            }}
        />
    );
};

export default LinkTransition;
