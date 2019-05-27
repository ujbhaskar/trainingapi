var mongoose = require('mongoose');
var mlabDb = "mongodb://ujjal:training2019@ds040167.mlab.com:40167/training-chat-db";
const mongoURI = mlabDb;
mongoose.connect(mongoURI);
const conn = mongoose.createConnection(mongoURI);


module.exports.conn = conn;
module.exports.url = mongoURI;

//ujjal/training2019