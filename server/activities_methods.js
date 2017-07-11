Meteor.methods({
  deleteActivity: function(doc){
    Activities.remove({_id: doc._id});
    var subs = Subactivities.find({activity: doc._id}).fetch();
    _.forEach(subs, function(sub){
      Meteor.call('deleteSubactivity', sub);
    });
    Meteor.call('updateScenario', doc.scenario);
  },
  cloneActivity: function(doc){
    Activities.insert({
      name: doc.name + " - clone",
      percent: doc.percent,
      times: doc.times,
      scenario: doc.scenario,
      rollup: doc.rollup,
      process: doc.process,
    });
    Meteor.call('updateScenario', doc.scenario);
  },

});
