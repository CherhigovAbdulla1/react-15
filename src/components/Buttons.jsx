import Buttons from '../assets/images/buttons.svg'
 
 function Buttonslogo(props){ 
    
    const {plus, minus, reset} = props;
 
    return(
         
        <div className='counter-buttons'>           
         <button className="button green-button" onClick={plus}>+</button>
        <button className="button reset-button" onClick={reset}><img src={Buttons} alt="button"></img></button>
        <button className="button red-button" onClick={minus}>-</button>
        </div>
    )
}

export default Buttonslogo