import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
myapp = new Mongo.Collection('reso');
Meteor.startup(() => {
  // code to run on server at startup
});
