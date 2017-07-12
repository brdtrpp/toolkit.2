Meteor.methods({
  deleteScenario: function(doc){
    Scenarios.remove({_id: doc._id});
    var acts = Activities.find({scenario: doc._id}).fetch()
    _.forEach(acts, function(act){
      Meteor.call('deleteActivity', act)
    });
  }
});
