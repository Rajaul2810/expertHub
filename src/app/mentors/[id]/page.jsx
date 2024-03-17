import React from 'react';

const details = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>Details page</h1>
            <h1>{ params.id}</h1>
        </div>
    );
};

export default details;