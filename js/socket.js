const socket = io(`${localStorage.getItem("ipAddress")}:3001`);

socket.on("err", (err) => {
    console.log(err);
  });