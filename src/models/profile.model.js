const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        maxlength: 500,
        default : '',
        required: false,
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