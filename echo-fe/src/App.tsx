
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const [input, setInput] =  useState<string>("")
  const [server,setServer]= useState()
  const inputRef = useRef()
  function sendMessage(){
    if(!server){
      return 
    }
  
    const msg = inputRef.current?.value
    //@ts-expect-error  use generics for now we ignore ts complains 
    server.send(msg) 
  }
 //it works one time and connection shouldn't re establish every time we connect 
  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    setServer(ws)
    ws.onmessage= function(msg){ 
      alert(msg.data)
    }
  },[])
  return(
    <> 
    <div className='flex flex-col h-screen gap -3 bg-black-900 text-white-900 justify-center items-center '>
     <h1 className="text-5xl p-2 m-2 font-bold">
      Welcome to Echo Room!
    </h1>
    <input type='text' ref={inputRef} className='text-white-900 rounded-sm w-2/4 outline border-r m-4 border-white-900 active:color-white-900 bg-black-900' placeholder='Message....'></input>
    <button onClick={sendMessage} className='text-black-900 bg-white-900 rounded-sm h-8 w-16 p-1 m-8 outline border-r border-white-900 '>Send Message</button>
    </div>
    </>
  )
}
export default App
