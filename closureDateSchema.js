import mongoose from "mongoose";

//ClosureDate
const closureDateSchema = new mongoose.Schema({
    closureDate: {
        type: Date,
        required: true,
    },
    FinalClosureDate: {
        type: Date,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const ClosureDate = mongoose.models.ClosureDate || mongoose.model("ClosureDate", closureDateSchema);

export default ClosureDate