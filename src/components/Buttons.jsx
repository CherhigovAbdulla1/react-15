import Buttons from '../assets/images/buttons.svg'

function Buttonslogo(){ 
    return(
        <div className='counter-buttons'>
         <button className="button green-button">+</button>
        <button className="button reset-button"><img src={Buttons} alt="button"></img></button>
        <button className="button red-button">-</button>
        </div>
      
    )
}

export default Buttonslogo