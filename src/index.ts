import { WebSocketServer,WebSocket } from "ws";
//const PORT = 8080
//const wss = new WebSocketServer({port:PORT})
//or other way
const wss = new WebSocketServer({port:8080})
const allClients :WebSocket[] = [] 
wss.on("connection",function(socket){
  console.log("Connection established at: ws://localhost:8080")
  allClients.push(socket)
  socket.send(JSON.stringify({system:"Welcome to echo Hall!!!😃"}))
  socket.on("message",(e)=>{
    const data = e.toString()
    // as per kirat 
    let msg=""
    if(data==="ping"){
      msg ="pong pong pong!!!"
      }else{
        msg = data
      }
   for(let i=0; i<allClients.length; i++){            
     if(allClients[i] === socket){
      continue
     }
      //@ts-ignore
      allClients[i].send(JSON.stringify({user:msg}))
   } 
    //for every client connection to server there is new socket or client as below we did  client !==socket i didn't understood
    // wss.clients.forEach((client) => {  // means wss.clients is a array of all active clients on wss server 
    //   if (client.readyState === 1 && client !== socket) {  //.forEach (client) so we pick every client in array of wss.client 
    //     client.send(JSON.stringify({ user: msg }));   //clients.readyState ===1 means if the client is active ig i.e connection is eastbalished and client !== socket
    //   }
    // })
  })
})