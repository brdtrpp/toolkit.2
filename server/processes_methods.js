Meteor.methods({
  deleteProcess: function(doc){
    Processes.remove({_id: doc});
    var sces = Scenarios.find({process: doc}).fetch();
    _.forEach(sces, function(sce){
      Meteor.call('deleteScenario', sce._id)
    });
  },
  cloneProcess: function(doc){
    var proId = Processes.insert({

    });
  },
  cloneApplication: function(pro, app){
    Processes.update(pro._id, {
      $push: { app: {
        name: app + " - clone"
      }}
    });
    console.log(pro);
    console.log(app);
  }
})
