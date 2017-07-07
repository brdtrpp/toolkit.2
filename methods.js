Meteor.methods({
  updateActivity: function(actId){
    Activities.update(actId, {
      $set: {},
    });
    var sceId = Activities.findOne(actId).scenario;
    Meteor.call('updateScenario', sceId);
  },
  updateScenario: function(sceId){
    Scenarios.update(sceId, {
      $set: {},
    });
  }
});
