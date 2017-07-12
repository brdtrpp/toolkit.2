Meteor.methods({
  deleteProcess: function(doc){
    Processes.remove({_id: doc._id});
    var sces = Scenarios.find({process: doc._id}).fetch();
    _.forEach(sces, function(sce){
      Meteor.call('deleteScenario', sce)
    });
  }
})
