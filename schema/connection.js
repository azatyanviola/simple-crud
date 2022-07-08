import mongoose from "mongoose";

const Conn = mongoose.connection;

Conn.on('error', () => console.error.bind(console, 'connection error'));
Conn.once('open', () => console.info('Connection to Database is successful'));

export default Conn;