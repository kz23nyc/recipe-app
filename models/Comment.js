import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    author: { type: String, default: 'Anonymous' }
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);
