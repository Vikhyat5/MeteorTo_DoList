import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

myapp = new Mongo.Collection('reso');
Template.body.helpers({
	    reso: function()
	    {	    	
	    	return myapp.find();
	    }
});

Template.body.events({
     'submit .new-resolution': function(event)
     {
     	var title=event.target.title.value;
     	myapp.insert({
     		title: title,
     		createdAt: new Date()
     	});

     	event.target.title.value="";

     	return false;
     }   
});

Template.resolution.events({
            'click .toggle-checked':function(){
                  myapp.update(this._id,{$set:{checked: !this.checked}});
            },

            'click .delete':function(){
                    myapp.remove(this._id);
            }
});



