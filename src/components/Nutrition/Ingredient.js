import React from 'react';

function Ingredient (props){
  const { children } = props;


    return(
        <p>{children}</p>
    );

}
export default Ingredient;