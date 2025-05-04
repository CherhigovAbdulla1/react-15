import { useState } from "react"
import Buttonslogo from "./Buttons"


function Number (){
    const [counter, setCounter] = useState(0)

    const plus = () => {
        setCounter(counter + 1);
      };
    
      const minus = () => {
        setCounter(counter - 1);
      };
    
      const reset = () => {
        setCounter(0);
      };

      
    return(
        <div className="numberValue">
            <h1>{counter}</h1>

            <Buttonslogo plus={plus} minus={minus} reset={reset} />
        </div>
    )
}

export default Number