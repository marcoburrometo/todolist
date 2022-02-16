import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Form.scss';

function Form({ titolo, sottotitolo, onSubmit, children }) {
    // console.log(props);
    const [descrizione, setDescrizione] = useState('');
    const [mouseOver, setMouseOver] = useState(false);
    return (
        <form className="input-form" onSubmit={(ev) => {
            ev.preventDefault();
            onSubmit({
                id: uuidv4(),
                descrizione: descrizione,
                data: new Date(),
                fatto: false,
            });
        }}>
            <h3>{titolo}</h3>
            <label>{sottotitolo}</label>
            <input
                className={mouseOver ? 'mouse-over' : ''}
                value={descrizione}
                placeholder="Descrizione"
                onMouseOver={() => {
                    console.log('mouse over')
                    setMouseOver(true);
                    // onMouse();
                }}
                onMouseOut={() => {
                    console.log('mouse out')
                    setMouseOver(false);
                }}
                onChange={(ev) => {
                    setDescrizione(ev.target.value);
                }} />
            {children}
            <button
                type="submit"
                disabled={descrizione === ''}
            >Aggiungi task</button>
        </form>
    )
}


export default Form;
