const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`The response is ${name} with id: ${id}`);
});

customEvent.on("response", () => {
  console.log("Some other logic");
});

customEvent.emit("response", "Hritick", 1);
