import { useState } from 'react';
import "./App.scss";
import Form from './components/Form/Form';

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
    <div className="App">
      <Form
        titolo="Inserisci un task"
        sottotitolo="Utilizza enter per aggiungere"
        onSubmit={onSubmit}
      >
        <p>ciao</p>
      </Form>
      {listaTask.map(task => {
        return (
          <div key={task.id}>{task.descrizione}</div>
        )
      })}
    </div>
  );
}


export default App;
