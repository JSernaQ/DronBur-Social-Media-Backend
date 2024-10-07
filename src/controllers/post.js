const { Post } = require('../models/PostsModels/post.model');
const { Comment } = require('../models/CommentsModels/comment.model');

async function getPosts(idUser) {
    try {
        const posts = await Post.find({ user: idUser });        
        
        const detailedPost = await Promise.all(
            posts.map(async (post) => {
                const comments = await Comment.find({ post_id: post._id })
                    .populate('user_id', 'username');

                return {
                    post: post,
                    comments: comments
                };
            })
        )

        return detailedPost;

    } catch (error) {
        return { message: error.message };
    }
};

const postPost = async (req, res) => {
    try {
        const { user, description, media } = req.body;

        if (!user || !description || !media) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all fields',
            });
        }

        const post = new Post({ user, description, media });
        await post.save();

        return res.json({
            success: true,
            message: 'Post created successfully',
            post: post
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPosts, postPost };
