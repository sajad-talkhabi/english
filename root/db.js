const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://sajjad:Sajjad_2005@cluster0.pxce0.mongodb.net/english';
mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.collection('users', function (err, collection) {
    collection.insert(contacts, function (err, result) {
        if (err) {
            job.log('Failed to save contacts as user with error: ' + JSON.stringify(err));
            done('Failed to save contacts as user with error: ' + JSON.stringify(err));
        } else {
            console.log(result.length);
            done();
        }
    });
});
db.on('connected', () => {
    console.log(`Mongo DB Connection successfully`);
});

db.on('error', () => {
    console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;