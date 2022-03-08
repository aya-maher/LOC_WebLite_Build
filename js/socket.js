const socket = io("http://192.168.1.3:3001");

socket.on("err", (err) => {
    console.log(err);
  });