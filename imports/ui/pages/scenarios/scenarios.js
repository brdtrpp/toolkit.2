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

});


Template.scenario.onRendered( function(){

});
