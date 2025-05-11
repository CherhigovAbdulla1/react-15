 import React, { useState } from "react";



function App(){

  const  [messages, setMessages] = useState()
  const [todos, setTodos] = useState(
    [
      {
        id: '1',
        content: 'hello',
        author: 'admin',
        sid: 'inbox'
      },
      {
        id: '2',
        content: 'hello',
        author: 'user',
        sid: 'outside'
      },
      {
        id: '3',
        content: 'whob are you',
        author: 'admin',
        sid: 'inbox'
      },
      {
        id: '4',
        content: 'are you sure',
        author: 'user',
        sid: 'outside'
      },
      {
        id: '5',
        content: 'sure',
        author: 'admin',
        sid: 'inbox'
      },
    ]
  )
  
  
   


function removeMess(id){

  setMessages(
    todos.filter(message => {
      return message.id !== id
    })
  )
  
}


 return(
     <div className="md:container mx-auto"> 
     <h1 className="text-2xl font-bold text-center py-10">Chat group</h1>
     {todos.length  === 0 ? <p>Empty</p> : 
        <div className="flex fle-col gap-x-3">
          
        {
          todos.map(message =>{
          return(
            <div key={message.id} className={`relative p-3 ronded-xl  w-60 ${message.sid === 'inbox' ? 'ml-auto bg-blue-500' : 'bg-green-500'}`}>
            <p>{message.content}</p>
            <span className="text-sm text-gray-700">{message.author}</span>

            <button onClick={() => removeMess(message.id)} className="absolute top-2 right-4 bg-transparent text-sm font-bold text-red-600"></button>
          </div>
          )
          })
        }
        
   
        </div>
        }
          <div className="flex flex-col mx-auto w-[500px] pt-10">
        <div className="flex gap-x-3 ">
                <input className="border-2 border-indigo-600 py-3 px-2 w-full text-xl" 
                type="text" 
                value={messages} 
                onChange={(event) => handleChange(event)}
                placeholder="Enter..." 
                />
                <button className="border-2 border-indigo-600 py-3 px-2 bg-indigo-600 text-white  rounded-lg hover:bg-transparent hover:text-indigo-600"
                onClick={handleAdd}
                >Add</button>
        </div>
         
        <div className="mt-4">
            {
                todos.map(messages =>{
                    return(
                        <p className="text-xl">{todos.text}</p>
                    )
                })
            }
        </div>
    </div>
     </div> 
     
    
  );
  


  
  function handleChange(event) {
    setMessages(event.target.value)
}

 function handleAdd() {
    setMessages('')
    setTodos([
      ...todos,
      {
          content: messages
      }
  ])
 }
 
  



 
    

  
}

 


export default App; 

 