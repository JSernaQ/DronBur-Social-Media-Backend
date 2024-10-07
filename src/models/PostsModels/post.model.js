const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    media: [{
       type: String,
    }],

}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };

