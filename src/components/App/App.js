import React, { useState } from 'react';
import './App.css';
import Form from '../AddCard/Form';
import Card from '../FoodCard/Card';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="container">
      <Form onFormSubmit={handleFormSubmit} />
      {formData && <Card formData={formData} />}
    </div>
  );
}

export default App;