import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://joao:123@projeto-nomes.b6skl.mongodb.net/pessoas");

let db = mongoose.connection;

export default db
