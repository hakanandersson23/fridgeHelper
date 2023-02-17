import React, { useState } from 'react';
import TextField from '../elements/TextField/TextField';
import Textarea from '../elements/TextArea/TextArea';
import Ingredient from '../Nutrition/Ingredient';
import './form.css'

function Form({ onFormSubmit }) {
  const [label, setLabel] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const handleLabelChange = (value) => {
    setLabel(value);
  };
  const handleTextChange = (value) => {
    setText(value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  
  function handleAddIngredient() {
    setIngredients([...ingredients, { name: "", amount: "" }]);
  }
  function handleIngredientChange(event, index) {
    const { name, value } = event.target;
    const newIngredients = [...ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [name]: value
    };
    setIngredients(newIngredients);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('label', label);
    formData.append('text', text);
    formData.append('image', image);
    onFormSubmit(formData);
    //reset form state
    setLabel('');
    setText('');
    setImage(null);
    setIngredients([]);
  };
  //making some changes

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextField label="Username" value={label} onChange={handleLabelChange} />
      </div>
      <br />
      <div>
        <Textarea label="Enter a description here" value={text} onChange={handleTextChange}/>
      </div>
      <br />
      <div className='ingredientButton'>
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            name={ingredient.name}
            amount={ingredient.amount}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
      <br/>
      </div>
      <div>
        <label for="file-input" class="file-upload">
          Upload Image
        </label>
        <input id="file-input" type="file" onChange={handleImageChange} />
      </div>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
