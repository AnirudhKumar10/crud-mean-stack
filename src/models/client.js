import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Client = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    balance: {
        type: Number
    }
});

export default mongoose.model('Client', Client, 'clients');