import { WebSocketServer } from 'ws'
// const port = 8080
// const wss = new WebSocketServer({port})
//or below manner 
//note port is case sensitive always use 'port'
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("✅ User Connected at ws://localhost:8080");

  socket.send(JSON.stringify({ system: "Welcome to Echo App 👋" }));

  socket.on("message", (data) => {
    const msg = data.toString();
    if(msg ==="ping" || msg==="Ping"){
        socket.send(JSON.stringify({ echo:"pong"}));
        
    }else{

        socket.send(JSON.stringify({ echo:msg}));
    }
    // Echo back to same client

    // Optional: broadcast to all clients (like group chat)
    wss.clients.forEach((client) => {
      if (client.readyState === 1 && client !== socket) {
        client.send(JSON.stringify({ user: msg }));
      }
    });
  });

  socket.on("close", () => {
    console.log("❌ User Disconnected");
  });
});
// wss is server  and socket is for evry chat ig 
