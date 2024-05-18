const mongoose = require('mongoose');

// Replace 'yourDatabaseName' with the name of your MongoDB database
const uri = 'mongodb+srv://karthickpandi1499:Karthick01%40@cluster0.ugoyqwh.mongodb.net/<YOUR_DATABASE_NAME>?retryWrites=true&w=majority&appName=Cluster0;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

module.exports = db;
