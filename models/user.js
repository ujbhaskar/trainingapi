var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    userType: {type: String, required: true},
    profilePicImage: {type:String},

}, { usePushEach: true });

schema.methods.speak = function () {
  var greeting = this.firstName?"My name is " + this.firstName:"I don't have a name";
  return greeting;
}
schema.methods.findSimilarUserTypes = function(callback) {
    return this.model('User').find({ userType: this.userType }, callback);
};
schema.statics.findByName = function(name, callback) {
    return this.find({ firstName: new RegExp(name, 'i') }, callback);
};
schema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
