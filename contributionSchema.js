import mongoose from "mongoose";

//Contribution
const contributionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
    },
    //article abstract(optional)
    abstract: {
        type: String,
    },
    articleType: {
        type: String,
    },
    images: {
        type: [String],
        default: [],
    },
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
    //String Array?
    comment: {
        type: String,
    },
    commentedDate: {
        type: Date,
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