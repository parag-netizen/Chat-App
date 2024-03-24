import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    Participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [""]
    }]

}, { timestamps: true });

const Converse = mongoose.model("Converse", conversationSchema);

export default Converse;