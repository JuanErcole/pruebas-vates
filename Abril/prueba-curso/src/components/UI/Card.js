import './Card.css';

function Card(props){       //sin props, cuando quiero encerrar algo en este componente, va a aparecer vacío
    const classes = 'card ' + props.className;      // si el className del div es solo card, va a ignorar el resto del css del hijo. props.className es, por ej, className="expenses" en Expenses.js  
    return (<div className={classes}>
        {props.children};       
    </div>)

}

export default Card;