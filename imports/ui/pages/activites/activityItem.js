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
  },
  rollupFixed: function(){
    var fixed = this.rollup.toFixed(2);
    return fixed;
  }
});

Template.activityItem.events({
  "click .delete-activity": function(event, template){
    Meteor.call("deleteActivity", this);
  },
  "click .clone-activity": function(event, template){
    Meteor.call("cloneActivity", this, this.scenario);
  },
  "click .activity": function(event, template){
    Session.set('act', this._id);
  },
  "click .edit-activity": function() {
    Session.set('act', this._id);
    $('#activityUpdateModal').modal('show');
  },
  "click .template-activity": function(){
    Meteor.call("templateActivity", this, this.scenario);
  }
});

Template.activityItem.onRendered(function(){

});
