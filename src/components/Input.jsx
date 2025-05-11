import { values } from "lodash";
import { useState } from "react";

function Input() {
    const [text, setText] = useState()
    const [todos, setTodos] = useState([
        {
            id: '1',
            text: 'learn react' 
        },
        {
            id: '2',
            text: 'learn  js' 
        },
        {
            id: '3',
            text: 'learn  css' 
        }
    ])
 


    function handleChange(event) {
        setText(event.target.value)
    }
    
     function handleAdd() {
        setText('')
        setTodos([
            ...todos,
            {
                text: text
            }
        ])
     }
     
      

 

    return (
        <div className="flex flex-col mx-auto w-[500px] pt-10">
            <div className="flex gap-x-3 ">
                    <input className="border-2 border-indigo-600 py-3 px-2 w-full text-xl" 
                    type="text" 
                    value={text} 
                    onChange={(event) => handleChange(event)}
                    placeholder="Enter..." 
                    />
                    <button className="border-2 border-indigo-600 py-3 px-2 bg-indigo-600 text-white  rounded-lg hover:bg-transparent hover:text-indigo-600"
                    onClick={handleAdd}
                    >Add</button>
            </div>
             
            <div className="mt-4">
                {
                    todos.map(todo =>{
                        return(
                            <p className="text-xl">{todo.text}</p>
                        )
                    })
                }
            </div>
        </div>
      );
}

export default Input;

