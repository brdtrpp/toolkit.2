Meteor.methods({
  deleteProcess: function(doc){
    Processes.remove(doc);
    var sces = Scenarios.find({process: doc}).fetch();
    _.forEach(sces, function(sce){
      Meteor.call('deleteScenario', sce._id)
    });
  },

  cloneProcess: function(doc){
    var newApps = [];
    _.forEach(doc.app, function(apps){
      newApps.push({"name": apps.name});
    });
    console.log(doc)
    var pro = Processes.insert({
      name: doc.name + " - clone",
      downtime: doc.downtime,
      timeperiod: doc.timeperiod,
      app: newApps
    });
    _.forEach(doc.app, function(apps){
      var sce = Scenarios.find({process: doc._id, application: apps._id}).fetch();
      console.log(sce)
    });

    var pros = Processes.findOne({_id: pro});
    // console.log(pros)
    // _.forEach()
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

    var sces = Scenarios.find({process: pro, application: app._id}).fetch();
    _.forEach(sces, function(sce){
      sce.application = process._id;
      Meteor.call('cloneScenario', sce);
    });
  },

  templateApplication: function(pro, app){
    var apps = Processes.findOne(pro).app;

    function findId(id) {
        return id._id === app;
    }

    var r = apps.find(findId);

    Processes.update(pro, {
      $push: { app: {
        name: r.name + " - template"
      }}
    });

    var afterApp = Processes.findOne(pro).app.pop();

    var sces = Scenarios.find({process: pro, application: app}).fetch();
    _.forEach(sces, function(sce){
      sce.application = afterApp._id;
      Meteor.call('templateScenario', sce);
    });
  }
})
