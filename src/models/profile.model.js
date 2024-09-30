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
    picture: {
        type: String,
        default: 'default_profile_picture.png',
    },
    birthdate: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = { Profile };