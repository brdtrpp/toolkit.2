Meteor.methods({
  updateActivity: function(actId){
    var act = Activities.findOne(actId);
    Activities.update(act, {
      $set: {},
    });
  }
});
