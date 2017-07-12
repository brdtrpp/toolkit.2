Meteor.methods({
  deleteScenario: function(doc){
    Scenarios.remove({_id: doc});
    var acts = Activities.find({scenario: doc}).fetch()
    _.forEach(acts, function(act){
      Meteor.call('deleteActivity', act)
    });
  }
});
