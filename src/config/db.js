const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Success : Connected to MongoDB');

    } catch (error) {
        console.error('Error : Connect to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = { connectDB }