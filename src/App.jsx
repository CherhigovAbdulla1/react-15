import { useDispatch, useSelector } from "react-redux";
 import Buttons from "./assets/images/buttons.svg";

function App(){
   const dispath = useDispatch()
  const number = useSelector(state => state)


  const plus = () =>{
      dispath ({
        type:'PLUS'
      })
  }

  const minus = () =>{
      dispath ({
        type:'MINUS'
      })
  }

  const reset = () =>{
     dispath ({
        type:'RESET'
      })
  }

    return(
     <div className="container mx-auto">
        <p className="text-4xl font-bold">{number}</p>
        <button onClick={plus} className="border-2 border-blue-400 py-1 px-4">+</button>
        <button onClick={reset} className="border-2 border-blue-400 py-1 px-4"><img src={Buttons} alt="button"></img></button>
        <button onClick={minus} className="border-2 border-blue-400 py-1 px-4">-</button>
      </div>
    )
}
 


export default App; 

 