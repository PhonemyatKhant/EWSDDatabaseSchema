import mongoose from "mongoose";

//Contribution
const contributionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    },
    academicYear: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    //document
    article: {
        type: String,
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    articleType: {
        type: String,
    },
    images: [
        { type: String }
    ],

    submittedDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['submitted', 'approved', 'edited'],
        default: 'submitted',
    },
    termsAgreed: {
        type: Boolean,
        required: true,
        default: false,
    },
},
    {
        timestamps: true,
    }
);

const Contribution = mongoose.models.Contribution || mongoose.model("Contribution", contributionSchema);

export default Contribution