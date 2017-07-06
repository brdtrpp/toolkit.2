import './scenarios.html'
import '/imports/ui/pages/activites/activities.js';


Template.scenario.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  activity: function(){
    return Activities.find({scenario: this._id}).fetch();
  }
});

Template.scenario.events({
  "click .scenario": function(event, template){
    Session.set('scenario', this._id);
  }
});


Template.scenario.onRendered( function(){

});
