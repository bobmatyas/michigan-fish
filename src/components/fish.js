import React from 'react';

export const Fish = ({name, description, latin, image}) => {

  return (
    <div className="fish">
        <h2 className="fish__header">{name}</h2>
        { latin ?  
          <p><strong>Latin Name:</strong> {latin} </p>
          : null
        }
        { image ?
          <img src={image} alt={name} />
          : null 
        }
        <p>{description}</p>
    </div>
    )
}

export default Fish;