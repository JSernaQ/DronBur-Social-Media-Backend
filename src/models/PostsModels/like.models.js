const mongoose = require('mongoose');

const PostLikeSchema = new mongoose.Schema({
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
}, { timestamps: true });

const PostLike = mongoose.model('PostLike', PostLikeSchema);

module.exports = { PostLike };
