import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    contribution: {
        type: Schema.Types.ObjectId,
        ref: 'Contribution',
        required: true
    },
    contributor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commenter: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment