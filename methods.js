Meteor.methods({
  updateProcess: function(proId){
    Processes.update(proId, {
      $set: {},
    });
  },
  updateScenario: function(sceId){
    Scenarios.update(sceId, {
      $set: {},
    });
    var proId = Scenarios.findOne(sceId).process;
    Meteor.call('updateProcess', proId);
  },
  updateActivity: function(actId){
    Activities.update(actId, {
      $set: {},
    });
    var sceId = Activities.findOne(actId).scenario;
    Meteor.call('updateScenario', sceId);
  },
  updateSubactivity: function(subId){
    Subactivities.update(subId, {
      $set: {},
    });
    var actId = Subactivities.findOne(subId).activity;
    Meteor.call('updateActivity', actId);
  },
});
