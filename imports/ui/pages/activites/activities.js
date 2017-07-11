import './activities.html'
import './activityItem.js'


Template.activities.helpers({
  create: function(){
  },
  rendered: function(){

  },
  destroyed: function(){

  },

});

Template.activities.events({
  'click .scenario': function(){
    Session.set('scenario', this._id);
  }
});
