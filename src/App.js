import React from 'react';
import Form from './Form/Form.js';
import Tasks from './Tasks/Tasks.js'
import Buttons from './Buttons/Buttons.js'
import Section from './Section/Section.js';
import Header from './Header/Header.js'

const tasks = [
  { id: 1, content: 'kupić cytryny', done: true },
  { id: 2, content: 'kupić kostki lodu', done: false },
  { id: 3, content: 'posprzątać mieszkanie', done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className='container'>
      <Header title='Lista zadań'/>
    <Section 
      title='Dodaj zadanie' 
      body={<Form />}
    />
    <Section 
      title='Lista zadań'
      body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
      extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
    />
    </main>
  );
}

export default App;
