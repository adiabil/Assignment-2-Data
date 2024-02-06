const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
           `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.9q8kp4s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        );
        
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {connectDB};
