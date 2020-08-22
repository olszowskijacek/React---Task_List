import React from 'react';
import Form from './Form/Form.js';
import Tasks from './Tasks/Tasks.js'

const tasks = [
  { id: 1, content: 'kupić cytryny', done: true },
  { id: 2, content: 'kupić kostki lodu', done: false },
  { id: 3, content: 'posprzątać mieszkanie', done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className='container'>
      <header>
        <h1>Lista zadań</h1>
      </header>

      <section className='section'>
        <header className='section__header'>
          <h2 className='section__title'>Dodaj nowe zadanie</h2>
        </header>
        <div className='section__body'>
          <Form />
        </div>
      </section>
      <section className='section'>
        <header className='section__header'>
          <h2 className='section__title'>Lista zadań</h2>
          <div className='buttons'></div>
        </header>
        <div className='section__body'>
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
      </section>
    </main>
  );
}

export default App;
