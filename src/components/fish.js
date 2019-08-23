import React from 'react';

export const Fish = (props) => {

  return (
    <div className="fish">
        <h2 className="fish__header">{props.name}</h2>
    </div>
    )
}

export default Fish;