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
  deleteApplication: function(pro, app){

    var process = Processes.findOne(pro).app;
    process = _.reject(process, function(apps) {
      return apps._id === app;
    });
    var sces = Scenarios.find({application: app, process: pro}).fetch();

    _.forEach(sces, function(sce){
      Meteor.call('deleteScenario', sce._id);
    });

    Processes.update(pro, {$set: {app: process}});
  },

  cloneApplication: function(pro, app){
    var named = app.name + " - clone"

    Processes.update(pro, {
      $push: { app: {
        name: named
      }}
    });

    var process = Processes.findOne(pro).app.pop();
    console.log(process)

    var sces = Scenarios.find({process: pro, application: app._id}).fetch();
    _.forEach(sces, function(sce){
      sce.application = process._id;
      Meteor.call('cloneScenario', sce);
    });
  }
})
