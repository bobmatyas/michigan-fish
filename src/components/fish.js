import React from 'react';

export const Fish = ({name, description, latin, image}) => {

  return (
    <div className="card">
      <div className="card__bg"
        style={{ backgroundImage: `url("${image}")` }}
      >
      </div>
      <div className="card__info">
        <h2 className="card__header">{name}</h2>
        { latin ?  
          <p className="card__latin"><i>Latin Name: {latin} </i></p>
          : null
        }
        
        <p className="card__text">{description}</p>
      </div>
    </div>
    )
}

export default Fish;