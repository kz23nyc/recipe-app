import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true,
        minlength: 3,
        maxlength: 150
    }
}, { timestamps: true });

// Index for category name to improve performance on queries involving the name
categorySchema.index({ name: 1 });

export default mongoose.model("Category", categorySchema);
