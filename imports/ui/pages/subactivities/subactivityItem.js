import { Template } from 'meteor/templating';
import './subactivityItem.html';


Template.subactivityItem.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },

  dt: function(){
    if (this.downtime){
      return "Yes"
    } else {
      return "No"
    }
  }
});

Template.subactivityItem.events({
  "click .clone-subactivity": function(event, template){
    var doc = this;
    var actId = this.activity;
    Meteor.call('cloneSubactivity', doc, actId);
  },

  "click .delete-subactivity": function(event, template){
    var doc = this;
    Meteor.call('deleteSubactivity', doc);
  },

  "click .edit-subactivity": function(){
    Session.set('sub', this._id);
    $('#subactivityUpdateModal').modal('show');
  },
});
