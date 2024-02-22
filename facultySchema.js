import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Faculty = mongoose.models.Faculty || mongoose.model("Faculty", facultySchema);

export default Faculty