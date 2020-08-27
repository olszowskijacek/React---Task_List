import React, { useState } from 'react';
import './form.css';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent('');
  };

  return (
    <form 
      onSubmit={onFormSubmit}
      className='form'
    >
      <input
        value={newTaskContent}
        className='form__input' placeholder='co jest do zrobienia?'
        onChange={({ target }) => setNewTaskContent(target.value)} 
      />
      <button className='form__button'>Dodaj zadanie</button>
    </form>
  )
};

export default Form;