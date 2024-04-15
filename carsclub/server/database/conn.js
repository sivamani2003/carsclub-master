const mongoose = require('mongoose');

const DB = 'mongodb+srv://sivamanik:A12345678b@cluster0.kj5bszs.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual connection string

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connection successful');
}).catch((err) => {
    console.error('Error connecting to the database:', err.message);
});
