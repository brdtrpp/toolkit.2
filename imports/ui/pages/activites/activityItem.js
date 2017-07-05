import { Template } from 'meteor/templating';
import './activityItem.html';


Template.activityItem.helpers({
  create: function(){

  },
  rendered: function(){
     console.log('toaster');
  },
  destroyed: function(){

  },
});

Template.activityItem.events({
  "click .delete-activity": function(event, template){
    var doc = this;
    Meteor.call("deleteActivity", doc);
  },
  "click .clone-activity": function(event, template){
    var doc = this;
    Meteor.call("cloneActivity", doc);
  }
});

Template.activityItem.onRendered(function(){

});
