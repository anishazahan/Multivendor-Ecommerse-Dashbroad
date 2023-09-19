import io from "socket.io-client";

export const overrideStyle = {
  display: "flex",
  margin: "0 auto",
  height: "25px",
  justifyContent: "center",
  alignItems: "center",
};

export const socket = io("https://multivendor-backend-eight.vercel.app");
