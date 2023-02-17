import React from 'react';


function Ingredient({ name, amount, onChange }) {
  return (
    <div>
    <input
      placeholder="Ingredient name"
      value={name}
      onChange={(event) => onChange(event, "name")}
    />
    <input
      placeholder="Amount"
      value={amount}
      onChange={(event) => onChange(event, "amount")}
    />
  </div>
  );
}

export default Ingredient;