import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    },
    //
    marketingCoordinator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Guest = mongoose.models.Guest || mongoose.model("Guest", guestSchema);

export default Guest