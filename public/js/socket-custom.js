var socket = io();

//La funcion on sirve como un escuchador
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

//La funcion emit sirve para enviar info al servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "Jota",
    mensaje: "Hola JayJay",
  },
  function (resp) {
    console.log(resp);
  }
);

socket.on("enviarMensaje", function (respuesta) {
  console.log("Servidor:", respuesta);
});
