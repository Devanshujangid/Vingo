// In src/socket.js
import { io } from "socket.io-client";
import { serverUrl } from './config.js'; // ✅ Import from the new config file

// REMOVE this line
// const serverUrl = "http://localhost:8000";

const socket = io(serverUrl, { 
    withCredentials: true,
    autoConnect: false 
});

export default socket;  