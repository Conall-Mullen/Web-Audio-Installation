var exampleSocket = new WebSocket("ws://localhost:7474");

console.log(exampleSocket);

exampleSocket.onopen = function (event) {
  console.log("sending data...");
  exampleSocket.send("Ready, willing and able!");
};

exampleSocket.onmessage = function (event) {
  let e = JSON.parse(event.data);

  console.log(e);
};

// Managing the interaction

$(window).on("beforeunload", function () {
  exampleSocket.close();
});
