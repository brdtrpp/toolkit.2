import { Template } from 'meteor/templating';
import './subactivityItem.html';


Template.subactivityItem.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.subactivityItem.events({
  "click .clone-subactivity": function(event, template){
    var doc = this;
    Meteor.call('cloneSubactivity', doc);
  },

  "click .delete-subactivity": function(event, template){
    var doc = this;
    Meteor.call('deleteSubactivity', doc);
  }
});
