Meteor.methods({
  deleteActivity: function(doc){
    Activities.remove({_id: doc._id});
    var subs = Subactivities.find({activity: doc._id}).fetch();
    _.forEach(subs, function(sub){
      Meteor.call('deleteSubactivity', sub);
    })
  },
  cloneActivity: function(doc){
    Activities.insert({
      name: doc.name + " - clone",
      percent: doc.percent,
      times: doc.times,
      state: doc.state,
      rollup: doc.rollup,
      process: doc.process,
    });
  }
});
