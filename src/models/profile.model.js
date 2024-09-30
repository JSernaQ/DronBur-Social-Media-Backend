const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bio: {
        type: String,
        maxlength: 500,
    },
    profilePicture: {
        type: String,
        default: 'default_profile_picture.png',
    },
    birthdate: {
        type: Date,
        required: True,
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;