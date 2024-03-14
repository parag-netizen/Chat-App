import Converse from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Converse.findOne({
            Participants: { $all: [senderId, recieverId] }
        })

        if (!conversation) {
            conversation = await Converse.create({
                Participants: [senderId, recieverId]
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO functionality

        //await conversation.save();
        //await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in message controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessage = async (req, res) => {
    try {

        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Converse.findOne({
            Participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessage controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}