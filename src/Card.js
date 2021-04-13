import React from 'react';
import './card.css'
// import React, {Fragment} from "react";

const card = ({ name, email, id }) => {
    return (
        // <div className='tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5' style={{width: '300px', height: '400px'}} >
        <div className='this'  >
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <a href={email}>{email}</a>
            </div>
        </div>
    );
}

export default card;