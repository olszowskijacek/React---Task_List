import React from 'react';
import './form.css';

const Form = () => (
    <form className='form'>
        <input className='form__input' placeholder='co jest do zrobienia?' />
        <button className='form__button'>Dodaj zadanie</button>
    </form>
)

export default Form;