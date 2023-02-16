import React from 'react';
import './foodCard.css';
import Button from './CardButton/Button';

function Card(props) {
  const { formData } = props;
  const label = formData.get('label');
  const text = formData.get('text');
  const image = formData.get('image');
  
  return (
    <div className='card'>
      <div className='imageWrapper'>
        {image && <img className='image' src={URL.createObjectURL(image)} alt="Food" />}
      </div>
      <div>
        <h3 className='label'>{label}</h3>
      </div>
      <div>
        <p className='text'>{text}</p>
      </div>
      <div className='buttonWrapper'>
        <Button className="expandButton">Expand</Button>
      </div>
    </div>
  );
}
export default Card;
