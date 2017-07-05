Meteor.methods({
  deleteActivity(doc){
    Activities.remove({_id: doc._id});
  }
});
