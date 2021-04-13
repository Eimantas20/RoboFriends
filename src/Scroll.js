import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px', width: '70%', display: 'inline-block'}}>
            {props.children}
        </div>
    );
};

export default Scroll