Meteor.methods({
  deleteScenario: function(doc){
    Scenarios.remove({_id: doc});
    var acts = Activities.find({scenario: doc}).fetch()
    _.forEach(acts, function(act){
      Meteor.call('deleteActivity', act)
    });
  },
  cloneScenario: function(doc){
    var sceId = Scenarios.insert({
      name: doc.name + " - clone",
      description: doc.description,
      process: doc.process,
      state: doc.state,
      application: doc.application,
    });

    var acts = Activities.find({scenario: doc._id}).fetch();
    _.forEach(acts, function(act){
      Meteor.call('cloneActivity', act, sceId);
    });

    Meteor.call('updateScenario', sceId);
  }
});
