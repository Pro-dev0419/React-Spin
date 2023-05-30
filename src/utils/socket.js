import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.REACT_APP_DEGENDROP_SERVER_URL
console.log(window.location)
export const socket = io(URL, {
    withCredentials: true,
    // transports: ["websocket"],
    query: {
        boxId: window.location.pathname.split('boxes/')[1]
    }
});