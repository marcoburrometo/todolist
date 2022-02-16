import { useState } from 'react';
import "./App.scss";
import Form from './components/Form/Form';
import Task from './components/Task/Task';

function App() {
  const [listaTask, setListaTask] = useState([]);

  console.log('lista', listaTask);
  const onSubmit = (task) => {
    setListaTask([
      ...listaTask,
      task,
    ])
  }
  return (
    <div className="app">
      <Form
        titolo="Inserisci un task"
        sottotitolo="Utilizza enter per aggiungere"
        onSubmit={onSubmit}
      >
        <p>ciao</p>
      </Form>
      {listaTask.map((task) => <Task key={task.id} {...task} />)}
    </div>
  );
}


export default App;
