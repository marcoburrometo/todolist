import { useState } from 'react';
import "./App.scss";

function App() {
  const [descrizione, setDescrizione] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  const [listaTask, setListaTask] = useState([]);
  console.log('lista', listaTask);

  return (
    <div className="App">
      <form className="input-form" onSubmit={(ev) => {
        // Evento gestito da noi e non più dal browser.
        ev.preventDefault();
        // Spread operator
        setListaTask([
          ...listaTask, {
            id: "......",
            descrizione: descrizione,
            data: new Date(),
            fatto: false,
          }]);
        setDescrizione('');
        console.log('submit', descrizione);
      }}>
        <input
          className={mouseOver ? 'mouse-over' : ''}
          value={descrizione}
          placeholder="Descrizione"
          onMouseOver={() => {
            console.log('mouse over')
            setMouseOver(true);
          }}
          onMouseOut={() => {
            console.log('mouse out')
            setMouseOver(false);
          }}
          onChange={function (ev) {
            setDescrizione(ev.target.value);
          }} />
        <button
          disabled={descrizione === ''}
        >Aggiungi task</button>
      </form>
    </div>
  );
}


export default App;
