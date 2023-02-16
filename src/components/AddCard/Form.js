import React, { useState } from 'react';
import TextField from '../elements/TextField/TextField';
import Textarea from '../elements/TextArea/TextArea';
import './form.css'

function Form({ onFormSubmit }) {
  const [label, setLabel] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleLabelChange = (value) => {
    setLabel(value);
  };

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('label', label);
    formData.append('text', text);
    formData.append('image', image);
    onFormSubmit(formData);
  };

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
