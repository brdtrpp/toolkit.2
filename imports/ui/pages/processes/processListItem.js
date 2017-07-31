import { Template } from 'meteor/templating';
import './processListItem.html'


Template.processListItem.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.processListItem.events({
  "click .delete-process": function(event, template){
    Meteor.call('deleteProcess', this);
  },
  'click .clone-process': function(){
    Meteor.call('cloneProcess', this);
  }
});
