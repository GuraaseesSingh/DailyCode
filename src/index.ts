import { WebSocketServer } from 'ws'
// const port = 8080
// const wss = new WebSocketServer({port})
//or below manner 
//note port is case sensitive always use 'port'

const wss = new WebSocketServer({port:8080})

//event handler
wss.on("connection", function(socket){
    console.log("User Connected at: ws://localhost:8080")
    socket.send("hi Baby")
    socket.on("message",function(e){
        console.log(e.toString())

    })
   
})
// wss is server  and socket is for evry chat ig 
