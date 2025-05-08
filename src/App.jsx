 import { useState } from "react";



function App(){

  const message = [message, setMessages] = useState(
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
      message.filter(message => {
        return message.id !== id
      })
    )
    
  }

 
   return(
       <div className="md:container mx-auto"> 
       <h1 className="text-2xl font-bold text-center py-10">Chat group</h1>
       {message.length  == 0 ? <p>Empty</p> : 
          <div className="flex fle-col gap-x-3">
            
          {
            message.map(message =>{
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
       </div> 
      
    );
}

export default App; 

 