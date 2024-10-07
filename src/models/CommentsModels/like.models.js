const mongoose = require('mongoose');

const CommentLikeSchema = new mongoose.Schema({
    usur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    },
}, { timestamps: true });

const CommentLike = mongoose.model('CommentLike', CommentLikeSchema);

module.exports = { CommentLike };
