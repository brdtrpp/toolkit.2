import { Template } from 'meteor/templating';
import './activityItem.html';
import '/imports/ui/pages/subactivities/subactivity.js';
import '/imports/ui/pages/subactivities/subactivity.html';


Template.activityItem.helpers({
  create: function(){

  },
  rendered: function(){
     console.log('toaster');
  },
  destroyed: function(){

  },
  subactivity: function(){
    return Subactivities.find({activity: this._id}).fetch();
  }
});

Template.activityItem.events({
  "click .delete-activity": function(event, template){
    var doc = this;
    Meteor.call("deleteActivity", doc);
  },
  "click .clone-activity": function(event, template){
    var doc = this;
    Meteor.call("cloneActivity", doc);
  },
  "click .activity": function(event, template){
    Session.set('act', this._id);
  }
});

Template.activityItem.onRendered(function(){

});
