import Card from '../Card/Card';
import './Task.scss';
import immagine from './trashcan.png';

function Task({ id, descrizione, data, fatto }) {
    return (
        <Card className="task">
            <div className='left-area'>
                <span className="data">{data.toString().substring(4, 21)}</span>
                <span className="descrizione">{descrizione}</span>
            </div>
            <div className="right-area">
                <img alt="delete" src={immagine} />
            </div>
        </Card >

    );
}

export default Task;

