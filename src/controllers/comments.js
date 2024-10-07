const { Comment } = require('../models/CommentsModels/comment.model');
const { Post } = require('../models/PostsModels/post.model');

const postComment = async (req, res) => {
    try {
        const { post_id, user_id, content } = req.body;
        
        const post = await Post.findById(post_id);
        
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        const comment = new Comment({ post_id, user_id, content });
        comment.save();
        
        res.status(201).json({
            success: true,
            message: 'Comment created successfully'
        });


    } catch (error) {

    }
}

module.exports = {
    postComment
};