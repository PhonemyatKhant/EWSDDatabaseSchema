import mongoose from "mongoose";

//ClosureDate
const closureDateSchema = new mongoose.Schema({
    closureDates: [{
        academicYear: {
            type: String,
            required: true
        },
        closureDate: {
            type: Date,
            required: true
        },
        finalClosureDate: {
            type: Date,
            required: true
        }
    }]
}, {
    timestamps: true,
});

const ClosureDate = mongoose.models.ClosureDate || mongoose.model("ClosureDate", closureDateSchema);

export default ClosureDate