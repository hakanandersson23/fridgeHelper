import React from 'react';


function Ingredient({ name, amount, onChange }) {
  return (
    <div>
      <input name="name" placeholder="Ingredient name" value={name} onChange={onChange} />
      <input name="amount" placeholder="Amount" value={amount} onChange={onChange} />
    </div>
  );
}

export default Ingredient;