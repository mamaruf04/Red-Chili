import React from 'react';

const DisplayFoods = ({foods}) => {
    
    return (
        <div>
            {
                foods?.items.map(food => <h1>{food?.name}</h1>)
            }
        </div>
    );
};

export default DisplayFoods;