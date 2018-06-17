Meteor.methods({
  deleteScenario: function(id){
    Scenarios.remove({_id: id});
    var acts = Activities.find({scenario: id}).fetch();
    _.forEach(acts, function(act){
      Meteor.call('deleteActivity', act)
    });
  },

  cloneScenario: function(doc){
    console.log(doc);
    var sceId = Scenarios.insert({
      name: doc.name + " - clone",
      description: doc.description,
      process: doc.process,
      state: doc.state,
      application: doc.application,
    });

    var acts = Activities.find({scenario: doc._id}).fetch();
    console.log(acts)
    _.forEach(acts, function(act){
      Meteor.call('cloneActivity', act, sceId);
    });
    //Update Scenario after cloning Scenario for reassurance of math
    Meteor.call('updateScenario', sceId);
  },

  templateScenario: function(doc){
    var sceId = Scenarios.insert({
      name: "Template - " + doc.name,
      description: doc.description,
      process: doc.process,
      state: doc.state,
      application: doc.application,
    });

    var acts = Activities.find({scenario: doc._id}).fetch();
    _.forEach(acts, function(act){
      Meteor.call('templateActivity', act, sceId);
    });
  }
});
