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
  },
  rollupFixed: function(){
    var fixed = this.rollup.toFixed(2);
    return fixed;
  }
});

Template.subactivityItem.events({
  "click .clone-subactivity": function(event, template){
    Meteor.call('cloneSubactivity', this, this.activity);
  },

  "click .delete-subactivity": function(event, template){
    var doc = this;
    Meteor.call('deleteSubactivity', doc);
  },

  "click .edit-subactivity": function(){
    var actId = Subactivities.findOne(this._id).activity;
    Session.set('sub', this._id);
    Session.set('act', actId);
    $('#subactivityUpdateModal').modal('show');
  },

  "click .template-subactivity": function(){
    Meteor.call('templateSubactivity', this, this.activity);
  }
});
