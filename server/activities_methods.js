Meteor.methods({
  deleteActivity(doc){
    Activities.remove({_id: doc._id});
  },
  cloneActivity(doc){
    Activities.insert({
      name: doc.name + " - clone",
      percent: doc.percent,
      times: doc.times,
      state: doc.state,
      rollup: doc.rollup
    });
  }
});
