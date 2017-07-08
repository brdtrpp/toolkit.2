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
    var doc = this;
    Meteor.call('deleteProcess', doc);
  }
});
