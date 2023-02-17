import React from 'react';


function Ingredient({ name, amount, index, onChange }) {
  return (
    <div>
      <input
        placeholder="Ingredient name"
        value={name}
        onChange={(event) => onChange(event.target.value, "name", index)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(event) => onChange(event.target.value, "amount", index)}
      />
    </div>
  );
}

export default Ingredient;