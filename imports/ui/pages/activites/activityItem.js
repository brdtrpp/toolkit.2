import { Template } from 'meteor/templating';
import './activityItem.html';
import '/imports/ui/pages/subactivities/subactivityItem.js';


Template.activityItem.helpers({
  create: function(){

  },
  rendered: function(){

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
    var sceId = this.scenario;
    Meteor.call("cloneActivity", this, sceId);
  },
  "click .activity": function(event, template){
    Session.set('act', this._id);
  },
  "click .edit-activity": function() {
    Session.set('act', this._id);
    $('#activityUpdateModal').modal('show');
  }
});

Template.activityItem.onRendered(function(){

});
