Meteor.methods({
  deleteActivity: function(doc){
    Activities.remove({_id: doc._id});
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
