const { User } = require('../models/user.model');
const { Profile } = require('../models/profile.model');
const { getPosts } = require('../controllers/post');

const getProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });

        if (!user || !user.status) {
            return res.status(404).json({
                success: false,
                message: 'Profile not found'
            });
        };
    
        const profile = await Profile.findOne({ user: user.id });

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: 'Profile not found'
            });
        };
        
        const posts = await getPosts(user.id);

        return res.status(200).json({
            success: true,
            profile: profile,
            username: user.username,
            email: user.email,
            posts: posts,
            message: 'Profile found'
        });

    } catch {
        return res.status(500).json({ message: 'Error fetching profile' });
    }
};

module.exports = {
    getProfile
};