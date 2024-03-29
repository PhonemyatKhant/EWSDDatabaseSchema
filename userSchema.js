import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['student', 'marketing coordinator', 'marketing manager', 'admin', 'guest'],
            required: true,
        },
        faculty: {
            type: Schema.Types.ObjectId,
            ref: 'Faculty'
        },
        academicYear: {
            type: String,
            required: true,
        },
        lastLogin: {
            type: Date,
            default: Date.now
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

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User