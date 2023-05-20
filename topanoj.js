const mongodb = require('mongodb').MongoClient;

mongodb.connect("mongodb://localhost:27017/topanoj", (err, db) => {
    if (err) throw err;
    console.log(db);
    db.close();
});