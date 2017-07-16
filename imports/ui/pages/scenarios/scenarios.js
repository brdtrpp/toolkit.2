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
  },
  rollupFixed: function(){
    var fixed = this.rollup.toFixed(2);
    return fixed;
  }
});

Template.scenario.events({
  'click .delete-scenario': function(){
    Meteor.call('deleteScenario', this._id);
  },
  'click .clone-scenario': function(){
    Meteor.call('cloneScenario', this);
  },
  'click .edit-scenario': function(){
    Session.set('scenario', this._id);
    $('#scenarioUpdateModal').modal('show');
  },
  'click .template-scenario': function(){
    Meteor.call('templateScenario', this);
  }
});


Template.scenario.onRendered( function(){

});
