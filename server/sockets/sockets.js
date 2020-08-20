const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido a esta app",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  //Escuchar al cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    //La propiedad broadcast sirve para que cuando se emita un mensaje desde el cliente , todos los que estan en el servidor puedan verlo
    client.broadcast.emit("enviarMensaje", data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "Todo salio OK",
    //   });
    // } else {
    //   callback({
    //     resp: "Todo salio BAD",
    //   });
    // }
  });
});
