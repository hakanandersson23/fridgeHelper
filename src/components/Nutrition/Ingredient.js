import React from 'react';


function Ingredient({ index, name, amount, onChange }) {
  return (
    <div>
      <input name={`ingredients[${index}].name`} placeholder="Ingredient name" value={name} onChange={onChange} />
      <input name={`ingredients[${index}].amount`} placeholder="Amount" value={amount} onChange={onChange} />
    </div>
  );
}

export default Ingredient;